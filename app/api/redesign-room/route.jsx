import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import axios from "axios";
import { db } from "@/config/db"; // Import the database connection
import { GeneratedImages } from "@/config/schema"; // Import the schema from the config folder

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

const REPLICATE_MODEL_VERSION =
  "76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38";

// Validate required input fields
const validateInput = (data) => {
  const { imageURL, roomType, designType, userEmail } = data;
  if (!imageURL) throw new Error("Image URL is required");
  if (!roomType) throw new Error("Room type is required");
  if (!designType) throw new Error("Design type is required");
};

// Generate unique filename with timestamp and random string
const generateUniqueFileName = () => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${timestamp}_${randomString}.png`;
};

// Convert image URL to base64
const convertImageToBase64 = async (imageURL) => {
  try {
    const response = await axios.get(imageURL, {
      responseType: "arraybuffer",
      timeout: 5000, // 5 second timeout
    });
    const base64 = Buffer.from(response.data).toString("base64");
    return `data:image/png;base64,${base64}`;
  } catch (error) {
    console.error("Error converting image:", error);
    throw new Error("Failed to convert image to base64");
  }
};

// Upload image to Firebase Storage
const uploadToFirebase = async (base64Image, fileName) => {
  try {
    const storageRef = ref(storage, `/room-redesign/${fileName}`);
    await uploadString(storageRef, base64Image, "data_url");

    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Firebase upload error:", error);
    throw new Error("Failed to upload image to storage");
  }
};

// Generate AI image using Replicate
const generateAIImage = async (imageURL, prompt) => {
  try {
    return await replicate.run(
      `adirik/interior-design:${REPLICATE_MODEL_VERSION}`,
      {
        input: {
          image: imageURL,
          prompt,
        },
      }
    );
  } catch (error) {
    console.error("Replicate API error:", error);
    throw new Error("Failed to generate AI image");
  }
};

export async function POST(req) {
  try {
    const body = await req.json();
    validateInput(body);

    const { imageURL, roomType, designType, moreInput, userEmail } = body;

    // Create prompt with optional additional input
    const prompt = `A ${roomType} with a ${designType} style interior${
      moreInput ? `. ${moreInput}` : ""
    }`;

    // Generate AI image
    const generatedImageURL = await generateAIImage(imageURL, prompt);

    // Convert to base64
    const base64Image = await convertImageToBase64(generatedImageURL);

    // Upload to Firebase
    const fileName = generateUniqueFileName();
    const downloadURL = await uploadToFirebase(base64Image, fileName);

    // Insert into the database
    const dbResult = await db
      .insert(GeneratedImages)
      .values({
        roomType: roomType,
        designType: designType,
        originalImage: imageURL,
        aiImage: downloadURL,
        userEmail: userEmail, 
      })
      .returning({ id: GeneratedImages.id });

    console.log(dbResult);

    // Return success response
    return NextResponse.json({
      "result": downloadURL,
      success: true,
      result: downloadURL,
      metadata: {
        roomType,
        designType,
        timestamp: Date.now(),
      },
    });
  } catch (error) {
    console.error("Process failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error",
        timestamp: Date.now(),
      },
      { status: error.status || 500 }
    );
  }
}
