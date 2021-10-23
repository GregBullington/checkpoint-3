import { ProxyState } from "../AppState.js";
import { TaskItem } from "../Models/TaskItem.js";



class TaskItemsService {
  createTaskItem(taskItemData) {


    console.log('Task item data online', taskItemData);
    const taskItem = new TaskItem(taskItemData)
    ProxyState.tasksItems = [...ProxyState.tasksItems, taskItem]
  }



}


export const taskItemsService = new TaskItemsService