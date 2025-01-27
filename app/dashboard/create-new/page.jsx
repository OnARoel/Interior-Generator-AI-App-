"use client";

import React, { useState } from "react";
import ImageSelector from "./_components/ImageSelector";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextInputArea from "./_components/TextInputArea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";

const CreateNewDesign = () => {
    const [formData, setFormData] = useState({});

    const onHandleInputChange = (value, fieldName) => {
        console.log(`Input changed: ${fieldName} = ${value}`);
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const GenerateImageAI = async () => {
        try {
            console.log("Generating image with AI...");
            const rawImageURL = await SaveImageToFireBase();
            console.log("Image uploaded to Firebase:", rawImageURL);
            const { data } = await axios.post("/api/redesign-room", {
                imageURL: rawImageURL,
                roomType: formData.roomType,
                designType: formData.designType,
                moreInput: formData.moreInput,
            });
            console.log("AI generated image data:", data);
        } catch (error) {
            console.error("Error generating image:", error);
        }
    };

    const SaveImageToFireBase = async () => {
        const fileName = `${Date.now()}_raw.png`;
        const imageRef = ref(storage, `/room-redesign/${fileName}`);

        try {
            console.log("Uploading image to Firebase...");
            await uploadBytes(imageRef, formData.image);
            const downloadedURL = await getDownloadURL(imageRef);
            console.log("Image uploaded successfully:", downloadedURL);
            return downloadedURL;
        } catch (error) {
            console.error("Upload failed", error);
            throw error;
        }
    };

    return (
        <div>
            <h2 className="font-bold text-3xl text-primary text-center">
                Experience AI Generated room designs!
            </h2>
            <p className="text-center text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-10">
                <ImageSelector
                    selectedImage={(value) => onHandleInputChange(value, "image")}
                />
                <div>
                    <RoomType
                        selectedRoomValue={(value) => onHandleInputChange(value, "roomType")}
                    />
                    <DesignType
                        selectedDesignType={(value) => onHandleInputChange(value, "designType")}
                    />
                    <TextInputArea
                        moreRequirement={(value) => onHandleInputChange(value, "moreInput")}
                    />
                    <Button onClick={GenerateImageAI} className="w-full mt-5">
                        Generate
                    </Button>
                    <p className="text-sm text-gray-400 mb-52">
                        One credit will be used to design a room
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreateNewDesign;
