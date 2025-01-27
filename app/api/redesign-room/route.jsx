import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req) {
  try {
    const { imageURL, roomType, designType, moreInput } = await req.json();
    const input = {
      image: imageURL,
      prompt: `A ${roomType} with a ${designType} style interior. ${moreInput}`,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );

    return NextResponse.json({ output });
  } catch (e) {
    return NextResponse.error();
  }
}
