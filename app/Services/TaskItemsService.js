import { ProxyState } from "../AppState.js";
import { TaskItem } from "../Models/TaskItem.js";
import { saveState } from "../Utils/LocalStorage.js";



class TaskItemsService {

  constructor() {
    console.log('Task Items Service online');
  }

  createTaskItem(taskItemData) {



    console.log('Task item data online', taskItemData);
    const taskItem = new TaskItem(taskItemData)
    ProxyState.tasksItems = [...ProxyState.tasksItems, taskItem]
  }
  addCheck(id) {
    //access the task items and find the specific id when called through onclick and change the check boolean value
    // console.log('check mark responding');
    let checked = ProxyState.tasksItems.find(tI => tI.id = id)
    if (checked.check) {
      checked.check = false
    }
    else {
      checked.check = true
    }
    saveState()
    ProxyState.tasksItems = ProxyState.tasksItems
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you want to delete this item in your list?')) {
      ProxyState.tasksItems = ProxyState.tasksItems.filter(tI => tI.id != id)
    }
  }


}


export const taskItemsService = new TaskItemsService