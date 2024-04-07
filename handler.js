import { showErrorMessage } from "./error_handler.js";
import { addToArrayInLocalStorage, getFromLocalStorage } from "./repository.js";

const ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY = "Task name could not be empty";

export const createTask = (taskName) => {
  if (!taskName) return showErrorMessage(ERROR_MESSAGE_WHEN_TASK_NAME_IS_EMPTY);

  addToArrayInLocalStorage(taskName);
  createListItem(taskName);
};

const createListIcons = (listItemHTML) => {
  const checkBoxHTML = document.createElement("input");
  checkBoxHTML.setAttribute("type", "checkbox");
  listItemHTML.appendChild(checkBoxHTML);

  const trashIconHTML = document.createElement("input");
  trashIconHTML.setAttribute("type", "image");
  trashIconHTML.setAttribute("class", "icons-task-list");
  trashIconHTML.setAttribute("src", "trash-can.png");
  listItemHTML.appendChild(trashIconHTML);
};

const createListItem = (taskName) => {
  const listItemHTML = document.createElement("li");
  const list = document.getElementById("taskList");
  listItemHTML.textContent = taskName;
  list.appendChild(listItemHTML);
  createListIcons(listItemHTML);
};

export const renderList = () => {
  const listItens = getFromLocalStorage();
  if (!listItens) return;

  listItens.forEach((item) => {
    createListItem(item);
  });
};
