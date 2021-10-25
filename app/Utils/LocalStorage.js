import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { TaskItem } from "../Models/TaskItem.js";

export function saveState() {
  localStorage.setItem('TasksApp', JSON.stringify({
    tasks: ProxyState.tasks,
    tasksItems: ProxyState.tasksItems
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TasksApp'))
  console.log('Saved Data Loaded!', data);
  if (data != null) {
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.tasksItems = data.tasksItems.map(tI => new TaskItem(tI, tI.check))
  }

}