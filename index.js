import { createTask, renderListItemEvents, renderList } from "./handler.js";

const input = document.getElementById("taskName");
const button = document.getElementById("newTaskButton");

const PageEventsListener = () => {
  button.addEventListener("click", () => {
    createTask(input.value);
    renderListItemEvents();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderList();
  renderListItemEvents();
});

PageEventsListener();
