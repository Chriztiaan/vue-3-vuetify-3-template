import { beforeEach, describe, expect, it } from 'vitest';
import { Task } from '../models/task';
import { taskService } from '../services/taskService';
import { useTaskStore } from '../stores/taskStore';

describe('xx', () => {
	const store = useTaskStore();

	beforeEach(() => {
		// resetting the store's state between tests
		store.$reset();
	});

	it('requestTasks', async () => {
		const tasks = ['Task1', 'Task2'].map((t) => new Task(t));

		// Because we don't want to hit integration points during unit tests, we can opt to override (aka monkey patch)
		// the service's functions.
		taskService.retrieveTasks = async (): Promise<Task[]> => {
			expect(store.loading).toBeTruthy();
			return tasks;
		};
		await store.requestTasks();

		expect(store.loading).toBeFalsy();
		expect(store.tasks).toHaveLength(2);
		expect(store.tasks).toContain(tasks[0]);
		expect(store.tasks).toContain(tasks[1]);
		expect.assertions(5);
	});

	it('insertTask', async () => {
		const task = new Task('task1');

		// Monkey patch
		taskService.insertTask = async (task: Task): Promise<Task> => {
			return task;
		};
		await store.addTask(task);

		expect(store.tasks).toHaveLength(1);
		expect(store.tasks).toContain(task);
		expect.assertions(2);
	});

	it('completeTask', async () => {
		const task = new Task('task1', false);

		// Directly adding model to store because we aren't testing insertion
		store.tasks = [task];

		// Monkey patch
		taskService.completeTask = async (task: Task): Promise<Task> => {
			expect(task.completed).toBeFalsy();
			task.completed = true;
			return task;
		};
		await store.completeTask(task);

		expect(store.tasks).toHaveLength(1);
		expect(store.tasks).toContain(task);
		expect(store.tasks[0].completed).toBeTruthy();
		expect.assertions(4);
	});
});
