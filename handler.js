import { addToArrayInLocalStorage, getFromLocalStorage } from "./repository.js"

export const createTask = (taskName) => {
    addToArrayInLocalStorage(taskName);
    createListItem(taskName);
}

const createListIcons = (listItemHTML) => {
    const checkBoxHTML = document.createElement("input");
    checkBoxHTML.setAttribute("type", "checkbox");
    listItemHTML.appendChild(checkBoxHTML);

    const trashIconHTML = document.createElement("input");
    trashIconHTML.setAttribute("type", "image");
    trashIconHTML.setAttribute("class", "icons-task-list")
    trashIconHTML.setAttribute("src", "trash-can.png");
    listItemHTML.appendChild(trashIconHTML);
};

const createListItem = (taskName) => {
    const listItemHTML = document.createElement("li");
    const list = document.getElementById("taskList");
    listItemHTML.textContent = taskName;
    list.appendChild(listItemHTML);
    createListIcons(listItemHTML);
}

export const renderList = () => {
    const listItens = getFromLocalStorage();
    if (!listItens) return;

    listItens.forEach(item => {
        createListItem(item);
    });
}
