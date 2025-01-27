import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const LoadingScreen = ({ loading }) => {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AlertDialogTitle>Loading...</AlertDialogTitle>
            <Image
              src={"/spinner.gif"}
              alt="loading"
              width={100}
              height={200}
            />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LoadingScreen;
