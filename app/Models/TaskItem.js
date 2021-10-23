import { generateId } from "../Utils/generateId.js";


export class TaskItem {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.tasksId = data.tasksId

  }

  get Template() {
    return `
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class ="form-check-label" for="flexCheckDefault" id="">
          ${this.name}
          </label>
        </div>`
  }
}
