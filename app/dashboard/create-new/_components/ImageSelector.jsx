"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImageSelector = ({ selectedImage }) => {
  const [file, setFile] = useState(null);

  const onFileSelected = (e) => {
    setFile(e.target.files[0]);
    selectedImage(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="upload-image">Select an Image</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className="hover:shadow-md p-3 border rounded-xl border-dotted flex justify-center border-primary bg-slate-300"
            style={{ borderWidth: "1px" }}
          >
            <Image
              className="w-[200px] h-[200px] object-cover"
              src={file ? URL.createObjectURL(file) : "/upload.jpg"}
              alt={file ? "selected image" : "upload image"}
              width={50}
              height={70}
            />
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default ImageSelector;
