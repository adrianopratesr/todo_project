import { createTask, renderListItemEvents, renderList } from "./handler.js";

export const inputTaskHTML = document.getElementById("taskName");
const button = document.getElementById("newTaskButton");

const PageEventsListener = () => {
  button.addEventListener("click", () => {
    createItem(inputTaskHTML.value);
    renderListItemEvents();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderList();
  renderListItemEvents();
});

PageEventsListener();
