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
                <SelectItem value="Living-room">Living Room</SelectItem>
                <SelectItem value="Bedroom">Bedroom</SelectItem>
                <SelectItem value="Kitchen">Kitchen</SelectItem>
                <SelectItem value="Office">Office</SelectItem>
                <SelectItem value="Bathroom">Bathroom</SelectItem>
            </SelectContent>
        </Select>
    </div>
);

export default RoomType;
