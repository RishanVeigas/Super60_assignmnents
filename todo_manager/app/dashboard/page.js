"use client";

import { useState, useEffect } from "react";
import { authed } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(authed, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(authed);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center text-black items-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center ">Dashboard</h2>

        {user && (
          <p className="text-center text-gray-600">
            Logged in as: <span className="font-semibold">{user.email}</span>
          </p>
        )}

        <div className="space-y-4">
          <button
            onClick={() => router.push("/todoManager")}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold shadow"
          >
            Go to Todo Manager
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
