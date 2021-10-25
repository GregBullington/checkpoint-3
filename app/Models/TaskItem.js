import { generateId } from "../Utils/generateId.js";


export class TaskItem {
  constructor(data, check = false) {
    this.id = data.id || generateId()
    this.name = data.name
    this.tasksId = data.tasksId
    this.check = check
  }

  get Template() {
    return `
        <div class="form-row mb-3">
          <input class="form-check-input" type="checkbox" value="" id="itemCheck" name="itemCheck" onclick="app.taskItemsController.addCheck('${this.id}')">
          <label class ="form-check-label" for="itemCheck">
          ${this.name}
          </label>
          <button class="btn btn-sm gxbtn" type="submit" onclick="app.taskItemsController.deleteItem('${this.id}')">✖</button>
        </div>`
  }
}
