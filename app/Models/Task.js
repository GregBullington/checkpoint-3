import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
  }

  get Template() {
    return `
    <div class="col-md-4 card elevation-3 m-3 p-0 h-100">
      <div id="" class="title-bar bg-primary">
        ${this.name}
      </div>
      <!--list start-->
      <div class="p-4">
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class ="form-check-label" for="flexCheckDefault" id="taskName">
          List Item
          </label>
        </div>
      </div>
      <!--list end-->
      <div class="col-12 text-under d-flex align-bottom">
        <form onsubmit="">
          <div class="input-group">
            <input type="text" class="form-control" name="name" id="addTask" aria-describedby="helpId"
              placeholder="Add Task....">
            <button class ="btn btn-sm" type ="submit">➕</button>
          </div>
        </form>
      </div>
    </div>`

  }

}