import { generateId } from "../Utils/generateId.js";


export class TaskItem {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.tasksId = data.tasksId

  }

  get Template() {
    return `
        <div class="form-row mb-3">
          <input class="form-check-input" type="checkbox" value="" id="listedItem">
          <label class ="form-check-label" for="listedItem">
          ${this.name}
          </label>
          <button class="btn btn-sm gxbtn" type="submit" onclick="app.taskItemsController.deleteItem('${this.id}')">✖</button>
        </div>`
  }
}
