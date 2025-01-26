import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Empty = () => (
    <div className="mt-10 flex flex-col items-center justify-center h-full">
        <Image src="/window.svg" alt="Empty" width={200} height={200} />
        <h2 className="font-medium text-xl text-gray-500 mt-4">
            Create new AI Interior Design
        </h2>
        <Button className="mt-5">Redesign Room</Button>
    </div>
);

export default Empty;
