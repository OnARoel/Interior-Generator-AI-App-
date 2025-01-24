"use client";

import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Image src="/logo.svg" alt="Logo" width={25} height={25} />
        <h2 className="font-bold text-lg">Design your AI Generated Room</h2>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src="/star.svg" alt="Star" width={25} height={25} />
          <h3 className="font-semibold">3</h3>
        </div>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
