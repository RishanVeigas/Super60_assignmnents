"use client";

import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useRouter } from "next/navigation";

export default function FinalProfile() {
  const router = useRouter();
  const { profile } = useContext(ProfileContext);

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center">Final Profile</h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {profile.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {profile.age}
          </p>
          <p>
            <span className="font-semibold">Bio:</span> {profile.bio}
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={() => router.push("/ReviewProfile")}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Edit Profile
          </button>

          <button
            onClick={() => router.push("/CreateProfile")}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            Create New Profile
          </button>
        </div>
      </div>
    </div>
  );
}
