"use client";
import { useState } from "react";
import { useTaskStore } from "../taskstore/tasks";
import { useRouter } from "next/navigation";


export default function AddTask() {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);
  const router=useRouter();

  const handleTask = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
    router.push("/tasklist")
  };

  return (
    <div className="  bg-gradient-to-br from-gray-100 min-h-screen flex items-center justify-center to-gray-200 px-4">
      <div className="p-10 border border-gray-100 bg-white shadow-2xl rounded-3xl w-full max-w-lg  ">


        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 ">
            Task Manager
          </h1>
          <p className=" mt-2 text-lg text-gray-500 ">
            Organize your work efficiently
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-5">
          Add New Task
        </h3>

    
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your task here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm 
                       focus:ring-2 text-gray-700 text-lg   focus:ring-blue-500 focus:outline-none"
          />

          <button
            onClick={handleTask}
            className="rounded-xl 
                       hover:bg-blue-700 transition shadow-md  font-semibold text-lg px-6 py-3 bg-blue-600 text-white "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
