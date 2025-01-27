import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Button } from "@/components/ui/button";

const AIOutputDialog = ({ openDialog, closeDialog, orgImage, aiImage }) => {
    {console.log(orgImage)}
    {console.log(aiImage)}
    return (
    <div>
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Result</AlertDialogTitle>
          </AlertDialogHeader>
          <ReactBeforeSliderComponent
            firstImage={{
                imageUrl: orgImage
            }}
            secondImage={{
                imageUrl: aiImage
            }}
          />
          <Button onClick={() => closeDialog(false)}>Close</Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AIOutputDialog;
