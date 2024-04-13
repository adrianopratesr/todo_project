import { listItemGenerator } from "./element_handler.js";
import { showAlert } from "./alert_handler.js";
import { inputTaskHTML } from "./index.js";
import {
  addToArrayInLocalStorage,
  getFromLocalStorage,
  getItemById,
  removeFromLocalStorage,
  updateFromLocalStorage,
} from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";
const NOT_FOUND_MESSAGE = "Item not found.";
const SUCCESS_CREATE_TASK_MESSAGE = "Task has been created.";

export const createTask = (taskName) => {
  if (!taskName) return showAlert(ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY);

  const taskId = addToArrayInLocalStorage(taskName);

  createListItem(taskId, taskName);
  showAlert(SUCCESS_CREATE_TASK_MESSAGE);
  refreshInputTaskName();
};

const createListItem = (taskId, taskName, taskStatus = false) => {
  const listHTML = document.getElementById("taskList");
  const listItem = listItemGenerator(taskName, taskStatus);
  listItem.setAttribute("id", taskId);

  listHTML.appendChild(listItem);
};

export const renderList = () => {
  const listItens = getFromLocalStorage();
  if (!listItens) return;

  listItens.forEach((item) => {
    createListItem(item.id, item.name, item.status);
  });
};

export const renderListItemEvents = () => {
  const itemsToAddEvent = getFromLocalStorage();

  if (itemsToAddEvent) {
    itemsToAddEvent.forEach((item) => {
      const elementHTML = document.getElementById(item.id);

      elementHTML.addEventListener("click", (event) => {
        const target = event.target.id;

        switch (target) {
          case "trashIcon":
            removeListItemEvent(item.id);
            break;
          case "doneIcon":
            updateListItemEvent(item.id);
            break;
          default:
            break;
        }
      });
    });
  }
};

const removeListItemEvent = (itemId) => {
  const item = getItemById(itemId);

  if (item) {
    removeFromLocalStorage(item.id);
  } else {
    showAlert(NOT_FOUND_MESSAGE);
  }

  location.reload();
};

const refreshInputTaskName = () => {
  inputTaskHTML.textContent = "";

  location.reload();
};

const updateListItemEvent = (itemId) => {
  const item = getItemById(itemId);

  if (item) {
    updateFromLocalStorage(item.id);
  } else {
    showAlert(NOT_FOUND_MESSAGE);
  }

  location.reload();
};
