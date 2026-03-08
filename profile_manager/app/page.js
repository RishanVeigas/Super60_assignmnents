"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen px-4 items-center justify-center flex flex-col  ">
      <div className="bg-white  w-full  shadow-lg rounded-xl p-10 text-center max-w-md">
        <h1 className="text-3xl mb-4 text-gray-800  font-bold">
          Profile Manager
        </h1>

        <p className="text-gray-600 mb-6">
          Create and review your profile using a simple 3-step flow.
        </p>

        <button
          onClick={() => router.push("/CreateProfile")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
}
