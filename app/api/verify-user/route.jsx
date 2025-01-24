import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { Users } from "@/config/schema";

export async function POST(req) {
    console.log("POST request received");
    const { user } = await req.json();

    try {
        const userEmail = user?.primaryEmailAddress?.emailAddress;
        const userInfo = await db
            .select()
            .from(Users)
            .where(eq(Users.email, userEmail));

        // console.log("User Info:", userInfo);

        if (userInfo.length === 0) {
            const saveResult = await db
                .insert(Users)
                .values({
                    name: user?.fullName,
                    email: userEmail,
                    imageUrl: user?.imageUrl,
                })
                .returning({ Users });

            return NextResponse.json({ result: saveResult[0].Users });
        }

        return NextResponse.json({ result: userInfo[0] });
    } catch (e) {
        console.error("Error fetching user info:", e);
        return NextResponse.json({ error: "Error fetching user info" }, { status: 500 });
    }
}
