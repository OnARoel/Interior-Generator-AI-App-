"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetails } from "./_context/UserDetails";

const provider = ({ children }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    user && VerifiyUser();
  }, [user]);

  const VerifiyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {
      user: user,
    });
    setUserDetail(dataResult.data.result);
  };

  return (
    <UserDetails.Provider value={{ userDetail, setUserDetail }}>
      <>
        <div>{children}</div>
      </>
    </UserDetails.Provider>
  );
};

export default provider;
