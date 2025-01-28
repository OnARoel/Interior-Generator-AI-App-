"use client";

import React, { useState, useEffect, useCallback } from "react";
import ImageSelector from "./_components/ImageSelector";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextInputArea from "./_components/TextInputArea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import LoadingScreen from "./_components/LoadingScreen";
import AIOutputDialog from "../_components/AIOutputDialog";

const CreateNewDesign = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [orgImage, setOrgImage] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (aiOutput) setOpenDialog(true);
  }, [aiOutput]);

  const handleInputChange = useCallback((value, fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []);

  const generateImage = async () => {
    setLoading(true);
    try {
      const imageURL = await uploadImageToFirebase();
      if (!imageURL) return;

      const response = await axios.post("/api/redesign-room", {
        imageURL,
        roomType: formData.roomType,
        designType: formData.designType,
        moreInput: formData.moreInput,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });

      if (response.data?.result) {
        setAiOutput(response.data.result);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImageToFirebase = async () => {
    if (!formData.image) {
      console.error("No image selected");
      return null;
    }

    try {
      const fileName = `${Date.now()}_raw.png`;
      const imageRef = ref(storage, `room-redesign/${fileName}`);
      await uploadBytes(imageRef, formData.image);
      const url = await getDownloadURL(imageRef);
      setOrgImage(url);
      return url;
    } catch (error) {
      console.error("Firebase upload error:", error);
      return null;
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl text-primary text-center">
        Experience AI Generated room designs!
      </h2>
      <p className="text-center text-gray-400">
        Upload a room to use as a template, select your design type and roomtype
        plus add some details and then boom!
      </p>

      <p className="text-center text-gray-400">
        We will generate a redesigned AI interior room for you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-10">
        <ImageSelector
          selectedImage={(value) => handleInputChange(value, "image")}
        />

        <div>
          <RoomType
            selectedRoomValue={(value) => handleInputChange(value, "roomType")}
          />

          <DesignType
            selectedDesignType={(value) =>
              handleInputChange(value, "designType")
            }
          />

          <TextInputArea
            moreRequirement={(value) => handleInputChange(value, "moreInput")}
          />

          <Button onClick={generateImage} className="w-full mt-5">
            Generate
          </Button>

          <p className="text-sm text-gray-400 mb-52">
            It will take approximately 10-15 seconds to generate your image!
          </p>
        </div>
      </div>

      <LoadingScreen loading={loading} />

      <AIOutputDialog
        openDialog={openDialog}
        closeDialog={() => setOpenDialog(false)}
        orgImage={orgImage}
        aiImage={aiOutput}
      />
    </div>
  );
};

export default CreateNewDesign;
