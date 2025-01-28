"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { UserDetails } from "@/app/_context/UserDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const { userDetail } = useContext(UserDetails);

  return (
    <header className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Image src="/logo.svg" alt="Logo" width={25} height={25} />
        <Link href="/dashboard/">
          <h2 className="font-bold text-lg">View your Designs</h2>
        </Link>
      </div>

      {/* <Button variant="ghost" className="rounded-full text-primary">
        Buy Credits
      </Button> */}

      <div className="flex gap-4 items-center">
        {/* <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          {/* <Image src="/star.svg" alt="Star" width={25} height={25} />
          <h3 className="font-semibold">{userDetail?.credits}</h3> */}
        {/* </div> */} 
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
