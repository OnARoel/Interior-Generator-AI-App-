"use client";

import React from "react";
import ImageSelector from "./_components/ImageSelector";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextArea from "./_components/TextInputArea";
import TextInputArea from "./_components/TextInputArea";
import { Button } from "@/components/ui/button";

const CreateNewDesign = () => {
  const onHandleInputChange = (value, fieldName) => {
    
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
              selectedDesign={(value) =>
                onHandleInputChange(value, "designType")
              }
            />

            <TextInputArea
              moreRequirement={(value) =>
                onHandleInputChange(value, "more-input")
              }
            />

            <Button className="w-full mt-5">Generate</Button>
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
