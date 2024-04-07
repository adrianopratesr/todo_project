import { listItemGenerator } from "./element_handler.js";
import { showErrorMessage } from "./error_handler.js";
import { addToArrayInLocalStorage, getFromLocalStorage } from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";

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
