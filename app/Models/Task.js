import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return `
    <div class="col-md-4 card elevation-3 m-3 p-0 h-100">
      <div style="background-color: ${this.color};" class="title-bar">
        ${this.name}
      </div>
      <!--list start-->
      <div class="p-4">
      ${this.getItems()}
      </div>
      <!--list end-->
      <div class="col-12 text-under d-flex align-bottom">
        <form onsubmit="app.taskItemsController.createTaskItem('${this.id}')">
          <div class="input-group">
            <input type="text" class="form-control" name="itemName" id="" aria-describedby="helpId"
              placeholder="Add Task....">
            <button class ="btn btn-sm" type ="submit">➕</button>
          </div>
        </form>
      </div>
    </div>`

  }

  getItems() {
    const tasksItems = ProxyState.tasksItems.filter(tI => this.id == tI.tasksId)
    let template = ''
    tasksItems.forEach(t => {
      template += t.Template
    })
    return template
  }

}