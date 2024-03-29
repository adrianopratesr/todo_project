import { addToArrayInLocalStorage, getFromLocalStorage } from "./repository.js"

export const createTask = (taskName) => {
    addToArrayInLocalStorage(taskName);
    createListItem(taskName);
}

const createListItem = (taskName) => {
    const listItemHTML = document.createElement("li");
    const list = document.getElementById("taskList");
    listItemHTML.textContent = taskName;
    list.appendChild(listItemHTML);
}

export const renderList = () => {
    const listItens = getFromLocalStorage();
    if (!listItens) return;

    listItens.forEach(item => {
        createListItem(item);
    });
}
