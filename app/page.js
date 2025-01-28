import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link"; // Import the correct Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to the AI Room Interior Designer App!
          </h1>
          <h3 className="mt-4 text-xl text-gray-600">
            Your one-stop shop for AI Designs
          </h3>
          <Link href="/dashboard/create-new">
            <Button className="mt-8 px-6 py-3 text-primary text-white rounded-lg hover:bg-blue-600">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="mt-12">
          <Image
            src="/modern.jpg"
            alt="Interior Design"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
