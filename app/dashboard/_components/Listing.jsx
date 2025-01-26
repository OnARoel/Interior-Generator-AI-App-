"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Empty from "./Empty";

const Listing = () => {
  const { user } = useUser();
  const [userRoomList] = useState([]);
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">
          Hello {user?.fullName || "Guest"}
        </h2>
        <Button>Redesign Room</Button>
      </div>
      {userRoomList.length === 0 ? <Empty /> : <div></div>}
    </div>
  );
};

export default Listing;
