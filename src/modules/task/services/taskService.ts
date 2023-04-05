import { Task } from '../models/task';

class TaskService {
	async retrieveTasks(): Promise<Task[]> {
		// 1. Do some request (gRPC-web, Thrift, Http) here.
		// 2. Take result and translate it to the return model (perhaps create a
		// translators directory and put all your translator logic there).
		// 3. Return the result.
		await delay(); // Pretending to make a request, waiting for it to complete

		const tasks = [new Task('Write template app', true), new Task('Become rich', false)]; // Pretending to tanslate results

		return tasks;
	}

	async insertTask(task: Task): Promise<Task> {
		return Promise.resolve(new Task(task.name, false /* New tasks are always incomplete (enforced by backend) */));
	}

	async completeTask(task: Task): Promise<Task> {
		return Promise.resolve(new Task(task.name, true));
	}
}

// Mock request in transit
function delay(): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const taskService = new TaskService();
