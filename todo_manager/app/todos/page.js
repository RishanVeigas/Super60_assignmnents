"use client";
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now(), text }
      ],
    })),

  updateTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));