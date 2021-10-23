import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksServices.js"


function _draw() {
  const tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}


export class TasksController {

  constructor() {
    console.log('controller online');
    ProxyState.on('tasks', _draw)
    _draw()


  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      name: form.name.value
    }
    tasksService.createList(newList)
    form.reset()
  }
}





