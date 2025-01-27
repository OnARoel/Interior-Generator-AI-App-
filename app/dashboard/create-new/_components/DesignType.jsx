import React, { useState } from "react";
import Image from "next/image";

const DesignType = ({ selectedDesignType }) => {
  const Designs = [
    { name: "Modern", image: "/modern.jpg" },
    { name: "Minimalist", image: "/minimalist.jpg" },
    { name: "Rustic", image: "/rustic.jpg" },
    { name: "Traditional", image: "/traditional.jpg" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <label className="text-gray-500">Room Interior Design Type</label>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Designs.map((design) => (
          <div
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
            key={design.image}
            onClick={() => {
              setSelectedOption(design.name); // Update local state
              selectedDesignType(design.name); // Pass the selected design to the parent
            }}
          >
            <div className="w-full h-32 relative">
              <Image
                style={{
                  border:
                    selectedOption === design.name ? "2px solid blue" : "none",
                }}
                src={design.image}
                layout="fill"
                objectFit="cover"
                alt={`${design.name} design`}
                className="rounded-md"
              />
            </div>
            <div className="mt-2 text-center font-semibold">{design.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignType;