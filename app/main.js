import { ValuesController } from "./Controllers/ValuesController.js";
import { TasksController } from "./Controllers/TasksController.js"
import { TaskItemsController } from "./Controllers/TaskItemsController.js"

class App {
  // valuesController = new ValuesController();

  tasksController = new TasksController()
  taskItemsController = new TaskItemsController()
}

window["app"] = new App();
