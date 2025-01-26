import React from "react";
import Image from "next/image";

const DesignType = () => {
  const Designs = [
    {
      name: "Modern",
      image: "/modern.jpg",
    },
    {
      name: "Minimalist",
      image: "/minimalist.jpg",
    },
    {
      name: "Rustic",
      image: "/rustic.jpg",
    },
    {
      name: "Traditional",
      image: "/traditional.jpg",
    },
  ];
  return (
    <div>
      <label className="text-gray-500">Room Interior Design Type</label>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Designs.map((design) => (
          <div
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
            key={design.image}
          >
            <div className="w-full h-32 relative">
              <Image
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
