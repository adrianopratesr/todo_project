import { listItemGenerator } from "./element_handler.js";
import { showErrorMessage } from "./error_handler.js";
import { addToArrayInLocalStorage, getFromLocalStorage } from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";

export const createTask = (taskName) => {
  if (!taskName) return showErrorMessage(ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY);

  addToArrayInLocalStorage(taskName);
  createListItem(taskName);
};



const createListItem = (taskName) => {
  const listHTML = document.getElementById("taskList");

  listItemGenerator(listHTML, taskName);
};

export const renderList = () => {
  const listItens = getFromLocalStorage();
  if (!listItens) return;

  listItens.forEach((item) => {
    createListItem(item);
  });
};
