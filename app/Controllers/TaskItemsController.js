import { taskItemsService } from "../Services/TaskItemsService.js";

export class TaskItemsController {

  constructor() {
    console.log('Tasks Items Controller online');
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

  deleteItem(id) {
    taskItemsService.deleteItem(id)
  }

}