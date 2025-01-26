"use client";

import React from "react";
import ImageSelector from "./_components/ImageSelector";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";

const CreateNewDesign = () => {
  const onHandleInputChange = (value, fieldName) => {};
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

            <DesignType />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewDesign;
