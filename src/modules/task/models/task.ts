export class Task {
	uuid: string;
	name: string;
	completed: boolean;

	constructor(name: string, completed = false) {
		this.uuid = Math.random() * 10000 + '';
		this.name = name;
		this.completed = completed;
	}
}
