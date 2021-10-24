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
  deleteTask(id) {
    if (window.confirm('Are you sure you want to delete this whole list?')) {
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
      ProxyState.tasksItems = ProxyState.tasksItems.filter(tI => tI.tasksId != id)
    }
  }
}
export const tasksService = new TasksService()
