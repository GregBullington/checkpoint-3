import { taskItemsService } from "../Services/TaskItemsService.js";

export class TaskItemsController {

  constructor() {
    console.log('Tasks Items Controller online');
  }


  createTaskItem(tId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskItemData = {
      // @ts-ignore
      name: form.itemName.value,
      tasksId: tId
    }


    console.log('creating item', taskItemData);
    taskItemsService.createTaskItem(taskItemData)

  }

  addCheck(id) {
    taskItemsService.addCheck(id)
  }

  deleteItem(id) {
    taskItemsService.deleteItem(id)
  }

}