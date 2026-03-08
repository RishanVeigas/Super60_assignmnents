"use client";
import { useTaskStore } from "../taskstore/tasks";
import { useRouter } from "next/navigation";

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskStore();
  const router = useRouter();

  return (
    <div className="min-h-screen px-4 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Task List</h2>

       
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => router.push("/AddTask")}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Add Task
          </button>

          <button
            onClick={() => router.push("/taskSummary")}
            className="px-5 py-2 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-800 transition"
          >
            Task Summary
          </button>
        </div>

        
        <div className="space-y-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg"
            >
            
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer text-lg ${
                  task.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {task.title}
              </span>

              <div className="flex gap-3">
           
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`px-4 py-1 rounded-lg shadow transition font-medium 
                    ${
                      task.completed
                        ? "bg-green-700 text-white hover:bg-green-800"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
