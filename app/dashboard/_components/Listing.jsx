"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/config/db";
import { GeneratedImages } from "@/config/schema"; // Import from the same folder as `db.js`
import { eq } from "drizzle-orm"; // Import `eq` for querying
import Empty from "./Empty";
import RoomDesign from "../create-new/_components/RoomDesign";

const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  useEffect(() => {
    if (user) {
      GetUserRoomList();
    }
  }, [user]);

  const GetUserRoomList = async () => {
    const result = await db
      .select()
      .from(GeneratedImages)
      .where(
        eq(GeneratedImages.userEmail, user?.primaryEmailAddress?.emailAddress)
      );
    setUserRoomList(result);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">
          Hello {user?.fullName || "Guest"}
        </h2>
        <Link href="/dashboard/create-new">
          <Button>Redesign Room</Button>
        </Link>
      </div>
      {userRoomList.length === 0 ? (
        <Empty />
      ) : (
        <div className="flex flex-col mb-5 mt-5">
          <h2 className="font-medium text-primary text-xl mb-10">
            Here are your generated rooms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {userRoomList.map((room, index) => (
              <RoomDesign key={index} room={room} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;
