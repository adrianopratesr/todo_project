import { createTask, renderList } from "./handler.js";

const input = document.getElementById("taskName");
const button = document.getElementById("newTaskButton");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    createTask(input.value);
});

document.addEventListener("DOMContentLoaded", () => {
    renderList();
})
