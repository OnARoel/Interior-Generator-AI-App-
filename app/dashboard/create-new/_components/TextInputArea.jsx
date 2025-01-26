import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TextInputArea = ({moreRequirement}) => {
  return (
    <div className="mt-5">
      <label className="text-gray-400">Enter some text</label>
      <Textarea
        className="mt-3"
        onChange={(e) => moreRequirement((e.target.value))}
      />
    </div>
  );
};

export default TextInputArea;
