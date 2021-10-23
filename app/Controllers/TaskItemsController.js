import { taskItemsService } from "../Services/TaskItemsService.js";

export class TaskItemsController {

  constructor() {
  }


  createTaskItem(tId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskItemData = {
      name: form.itemName.value,
      tasksId: tId
    }


    console.log('creating item', taskItemData);
    taskItemsService.createTaskItem(taskItemData)

  }

}