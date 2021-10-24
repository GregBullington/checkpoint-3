import { ProxyState } from "../AppState.js";
import { TaskItem } from "../Models/TaskItem.js";



class TaskItemsService {

  constructor() {
    console.log('Task Items Service online');
  }

  createTaskItem(taskItemData) {



    console.log('Task item data online', taskItemData);
    const taskItem = new TaskItem(taskItemData)
    ProxyState.tasksItems = [...ProxyState.tasksItems, taskItem]
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you want to delete this item in your list?')) {
      ProxyState.tasksItems = ProxyState.tasksItems.filter(tI => tI.id != id)
    }
  }


}


export const taskItemsService = new TaskItemsService