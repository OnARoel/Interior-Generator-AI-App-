import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const RoomDesign = ({ room }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-[4/3]">
        {/* Image comparison slider with a 4:3 aspect ratio */}
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: room.aiImage,
          }}
          secondImage={{
            imageUrl: room.originalImage,
          }}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-1">
        <h2 className="text-lg font-semibold text-gray-800 text-center truncate">
          {room.roomType}
        </h2>
        <h3 className="text-sm text-gray-600 text-center mt-1 truncate">
          {room.designType}
        </h3>
      </div>
    </div>
  );
};

export default RoomDesign;
