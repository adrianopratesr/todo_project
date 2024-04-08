import { listItemGenerator } from "./element_handler.js";
import { showErrorMessage } from "./error_handler.js";
import {
  addToArrayInLocalStorage,
  getFromLocalStorage,
  getItemById,
  removeFromLocalStorage,
} from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";
const NOT_FOUND_MESSAGE = "Item not found.";

export const createTask = (taskName) => {
  if (!taskName) return showErrorMessage(ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY);

  const taskId = addToArrayInLocalStorage(taskName);

  createListItem(taskId, taskName);
};

const createListItem = (taskId, taskName) => {
  const listHTML = document.getElementById("taskList");
  const listItem = listItemGenerator(taskName);
  listItem.setAttribute("id", taskId);

  listHTML.appendChild(listItem);
};

export const renderList = () => {
  const listItens = getFromLocalStorage();
  if (!listItens) return;

  listItens.forEach((item) => {
    createListItem(item.id, item.name);
  });
};

export const renderListItemEvents = () => {
  const itemsToAddEvent = getFromLocalStorage();

  if (itemsToAddEvent) {
    itemsToAddEvent.forEach((item) => {
      const elementHTML = document.getElementById(item.id);
      elementHTML.addEventListener("click", () => {
        removeListItemEvent(item.id);
      });
    });
  }
};

const removeListItemEvent = (itemId) => {
  const item = getItemById(itemId);

  if (item) {
    removeFromLocalStorage(item.id);
  } else {
    showErrorMessage(NOT_FOUND_MESSAGE);
  }

  location.reload();
};
