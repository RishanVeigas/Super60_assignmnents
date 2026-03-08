"use client";
import { useTodoStore } from "../todos/page";
import { useState } from "react";

export default function TodoManager() {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white shadow-lg rounded-xl text-black">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Todo Manager
      </h2>

    
      <div className="flex gap-3 mb-8">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => {
            if (!text.trim()) return;
            addTodo(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>

      <ul className="space-y-4 text-black">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
          >
            {editingId === todo.id ? (
              <div className="flex w-full gap-3">
                <input
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  onClick={() => {
                    updateTodo(todo.id, editText);
                    setEditingId(null);
                    setEditText("");
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
       
                <span className="text-gray-700 font-medium">{todo.text}</span>

                <div className="flex gap-2">
                  {/* Edit */}
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                  >
                    Edit
                  </button>

               
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
