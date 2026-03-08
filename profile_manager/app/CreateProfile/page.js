"use client";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useRouter } from "next/navigation";

export default function CreateProfile() {
  const { profile, updateProfile } = useContext(ProfileContext);
  const router = useRouter();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [age, setAge] = useState(profile.age);
  const [bio, setBio] = useState(profile.bio);

  const handleNext = () => {
    updateProfile({ name, email, age, bio });
    router.push("/ReviewProfile");
  };

  return (
    <div className="min-h-screen flex items-center text-black justify-center bg-gray-100 px-4">
      <div className=" bg-white rounded-xl shadow-lg p-8 space-y-6 w-full max-w-lg">
        <h2 className=" text-center text-3xl font-semibold ">Create Profile</h2>

        <div className="space-y-4">

    
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" focus:ring-2 focus:ring-blue-500 w-full border rounded-lg px-3 py-2 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" px-3 py-2 focus:ring-2 w-full border rounded-lg focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

        
          <div>
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 h-24 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Tell something about yourself"
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
