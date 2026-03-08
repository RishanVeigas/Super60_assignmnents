"use client";
import { useTaskStore } from "../taskstore/tasks";
import { useRouter } from "next/navigation";

export default function TaskSummary() {
  const router = useRouter();
  const getCompleted = useTaskStore(state => state.getCompletedTasks);
  const getPending = useTaskStore(state => state.getPendingTasks);

  const completed = getCompleted();
  const pending = getPending();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full mt-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">

   
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Task Summary
        </h2>

      
        <div className="flex justify-center mb-8">
          <button
            onClick={() => router.push("/tasklist")}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Back to List
          </button>
        </div>


        <div className="mb-10">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Completed Tasks
          </h3>

          {completed.length === 0 ? (
            <p className="text-gray-500 italic">No tasks completed yet</p>
          ) : (
            <div className="space-y-2">
              {completed.map(task => (
                <p
                  key={task.id}
                  className="p-3 bg-green-50 border border-green-200 rounded-md text-gray-800"
                >
                  {task.title}
                </p>
              ))}
            </div>
          )}
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            Pending Tasks
          </h3>

          {pending.length === 0 ? (
            <p className="text-gray-500 italic">No tasks are pending</p>
          ) : (
            <div className="space-y-2">
              {pending.map(task => (
                <p
                  key={task.id}
                  className="p-3 bg-orange-50 border border-orange-200 rounded-md text-gray-800"
                >
                  {task.title}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
