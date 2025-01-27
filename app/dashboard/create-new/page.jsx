"use client";

import React, { useState } from "react";
import ImageSelector from "./_components/ImageSelector";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextArea from "./_components/TextInputArea";
import TextInputArea from "./_components/TextInputArea";
import { Button } from "@/components/ui/button";
import axios from "axios";

const CreateNewDesign = () => {
  const [formData, setFormData] = useState([]);

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    console.log(formData);
  };

  const GenerateImageAI = async () => {
    const result = await axios.post("/api/redesign-room", formData);
    console.log(result);
  };
  return (
    <>
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
              selectedRoomValue={(value) =>
                onHandleInputChange(value, "roomType")
              }
            />

            <DesignType
              selectedDesignType={(value) =>
                onHandleInputChange(value, "designType")
              }
            />

            <TextInputArea
              moreRequirement={(value) =>
                onHandleInputChange(value, "more-input")
              }
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
    </>
  );
};

export default CreateNewDesign;
