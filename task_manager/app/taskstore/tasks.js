import { create } from "zustand";

export const useTaskStore = create((set, get) => ({
  tasks: [],

  addTask: (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    set({ tasks: [...get().tasks, newTask] });
  },

  toggleTask: (id) => {
    set({
      tasks: get().tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    });
  },

  deleteTask: (id) => {
    set({
      tasks: get().tasks.filter(task => task.id !== id)
    });
  },

  getCompletedTasks: () => {
    return get().tasks.filter(t => t.completed);
  },

  getPendingTasks: () => {
    return get().tasks.filter(t => !t.completed);
  }
}));