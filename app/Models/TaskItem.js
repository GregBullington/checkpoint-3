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
      <input class="form-check-input" type="checkbox" value="" id="checkbox" name="checkbox" ${this.check ? 'checked' : ''} onclick="app.taskItemsController.addCheck('${this.id}')">
        <label class="form-check-label" for="checkbox">
          ${this.name}
        </label>
      </input>
      <button class="btn btn-sm gxbtn" type="submit" onclick="app.taskItemsController.deleteItem('${this.id}')">✖</button>
    </div>`
  }
}
