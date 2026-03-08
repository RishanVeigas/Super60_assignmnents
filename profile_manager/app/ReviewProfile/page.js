"use client";

import { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useRouter } from "next/navigation";

export default function ReviewProfile() {
  const router = useRouter();
  const { profile, updateProfile } = useContext(ProfileContext);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [age, setAge] = useState(profile.age);
  const [bio, setBio] = useState(profile.bio);

  const handleNext = () => {
    updateProfile({ name, email, age, bio });
    router.push("/ProfilePage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center">Review Profile</h2>

        <p className="text-gray-600 text-center">
          Review and update your details before final submission.
        </p>

        <div className="space-y-4">

          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

       
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

      
          <div>
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-sm font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 h-24 resize-none outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell something about yourself"
            />
          </div>

        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
