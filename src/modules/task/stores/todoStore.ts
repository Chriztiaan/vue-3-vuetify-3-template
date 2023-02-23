import { defineStore } from 'pinia';
import type { Task } from '../models/task';
import { taskService } from '../services/taskService';

export const useTaskStore = defineStore('task', {
  state: () => ({ tasks: [] as Task[], loading: false }),
  getters: {
    totalTasks: (state) => state.tasks.length,
  },
  actions: {
    async requestTasks(): Promise<void> {
      this.tasks = [];
      this.loading = true;

      this.tasks = await taskService.retrieveTasks();

      this.loading = false;
    },
    addTask(task: Task): Promise<void> {
      return taskService.insertTask(task).then((addedTask) => {
        this.tasks.push(addedTask);
      }).catch((error) => {
        console.log("Failure! " + error);
      });
    },
    async completeTask(task: Task): Promise<void> {
      return taskService.completeTask(task).then(() => {
        task.completed = true;
      }).catch((error) => {
        console.log("Failure! " + error);
      });
    }
  },
});

// Allows Pinia stores to have HMR (Hot Module Reloading - Will update store's code in the application on store) with Vite
// ensureStoreHMR(useTaskStore);