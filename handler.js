import { listItemGenerator } from "./element_handler.js";
import { showAlert } from "./alert_handler.js";
import { inputTaskHTML } from "./index.js";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";
const SUCCESS_CREATE_TASK_MESSAGE = "Task has been created.";
const API_URL = 'http://localhost:3000/api/tasks';
//const NOT_FOUND_MESSAGE = "Item not found.";

export const createItem = (title) => {
  if (!title) return showAlert(ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY);

  createTask(API_URL, title);
  showAlert(SUCCESS_CREATE_TASK_MESSAGE);
  refreshInputTaskName();
};

const createListItem = (taskId, title, taskStatus = false) => {
  const listHTML = document.getElementById("taskList");
  const listItem = listItemGenerator(title, taskStatus);
  listItem.setAttribute("id", taskId);

  listHTML.appendChild(listItem);
};

export const renderList = () => {
  const listItens = getAllTasks(`${API_URL}`);
  if (!listItens) return;

  listItens.forEach((item) => {
    createListItem(item.taskId, item.title, item.status);
  });
};

export const renderListItemEvents = () => {
  const itemsToAddEvent = getAllTasks(API_URL);

  if (itemsToAddEvent) {
    itemsToAddEvent.forEach((item) => {
      const elementHTML = document.getElementById(item.taskId);

      elementHTML.addEventListener("click", (event) => {
        const target = event.target.taskId;

        switch (target) {
          case "trashIcon":
            removeListItemEvent(item.taskId);
            break;
          case "doneIcon":
            updateListItemEvent(item.taskId, item.status);
            break;
          default:
            break;
        }
      });
    });
  }
};

const updateListItemEvent = (itemId, status) => {
  updateTask(API_URL, item.itemId, item.status);
  location.reload();
};

const removeListItemEvent = (itemId) => {
  deleteTask(API_URL, item.itemId);
  location.reload();
};

const refreshInputTaskName = () => {
  inputTaskHTML.textContent = "";

  location.reload();
};
