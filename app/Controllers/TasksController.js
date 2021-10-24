import { ProxyState } from "../AppState.js";
// @ts-ignore
import { taskItemsService } from "../Services/TaskItemsService.js";
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _draw() {
  const tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}


export class TasksController {

  constructor() {
    console.log('Tasks Controller online');
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)
    ProxyState.on('tasksItems', _draw)
    ProxyState.on('tasksItems', saveState)
    loadState()
    _draw()


  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      color: form.color.value
    }
    console.log(newList);
    tasksService.createList(newList)
    // debugger
    // @ts-ignore
    form.reset()
  }

  deleteTask(id) {
    tasksService.deleteTask(id)
  }

}





