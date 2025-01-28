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
  return (
    <div>
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Result</AlertDialogTitle>
          </AlertDialogHeader>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: aiImage,
            }}
            secondImage={{
              imageUrl: orgImage,
            }}
          />
          <div className="flex items-center justify-between mt-4">
            <Button variant="secondary" onClick={() => closeDialog(false)}>
              Close
            </Button>
            <a href={aiImage} target="_blank" rel="noopener noreferrer">
              <Button>View</Button>
            </a>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AIOutputDialog;
