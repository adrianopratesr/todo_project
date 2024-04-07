import { removeListItem } from "./handler.js";

export const listItemGenerator = (liTextContent) => {
  const listItemHTML = document.createElement("li");
  listItemHTML.textContent = liTextContent;

  appendElementsToListItem(listItemHTML);

  return listItemHTML;
};

const listItemElements = [
  {
    tagHTML: "input",
    id: "trashIcon",
    type: "image",
    class: "icons-task-list",
    src: "trash-can.png",
  },
  {
    tagHTML: "input",
    id: "doneIcon",
    type: "checkbox",
  },
];

const appendElementsToListItem = (listItemHTML) => {
  if (listItemHTML && listItemElements.length > 0) {
    listItemElements.forEach((element) => {
      if (element.tagHTML) {
        const elementHTML = document.createElement(element.tagHTML);

        for (const key in element) {
          if (element.hasOwnProperty(key) && key !== "tagHTML") {
            elementHTML.setAttribute(key, element[key]);
          }
        }

        listItemHTML.appendChild(elementHTML);
      }
    });
  }
};
