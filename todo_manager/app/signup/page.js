"use client";

import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { authed } from "../firebase";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(authed, (user) => {
      if (user) router.push("/dashboard");
    });

    return () => unsub();
  }, [router]);

  const handleSignup = async () => {
    setError("");

    try {
      await createUserWithEmailAndPassword(authed, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8 space-y-5">
        
        <h2 className="text-2xl font-semibold text-center">Create an Account</h2>

        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Sign Up
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
