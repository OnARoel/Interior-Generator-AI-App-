import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const RoomDesign = ({ room }) => {
return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white p-5">
        <div className="relative w-full aspect-[4/3] mb-4"> {/* Maintains a 4:3 aspect ratio */}
            <ReactBeforeSliderComponent
                firstImage={{
                    imageUrl: room.aiImage,
                }}
                secondImage={{
                    imageUrl: room.originalImage,
                }}
                className="absolute inset-0 h-full w-full object-cover" // Ensures scaling
            />
        </div>
        <h2 className="text-center text-xl font-semibold">{room.roomType}</h2>
        <h3 className="text-center text-lg text-gray-600 mt-2">{room.designType}</h3>
    </div>
);
};

export default RoomDesign;
