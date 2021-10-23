import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js"



class TasksService {

  constructor() {
    console.log('Tasks Service online');
  }

  createList(newList) {
    const task = new Task(newList)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
}
export const tasksService = new TasksService()
