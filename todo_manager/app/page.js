"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authed } from "./firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      await signInWithEmailAndPassword(authed, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8 space-y-6">

        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
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
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Login
        </button>

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}
