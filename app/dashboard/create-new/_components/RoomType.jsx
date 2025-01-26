import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const RoomType = ({selectedRoomValue}) => (
    <div>
        <label className="text-slate-400">Select Room Type</label>
        <Select onValueChange={(value) => selectedRoomValue(value)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Room Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="living-room">Living Room</SelectItem>
                <SelectItem value="bedroom">Bedroom</SelectItem>
                <SelectItem value="kitchen">Kitchen</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="bathroom">Bathroom</SelectItem>
            </SelectContent>
        </Select>
    </div>
);

export default RoomType;
