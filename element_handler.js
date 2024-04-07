export const listItemGenerator = () => {
  const listItemHTML = document.createElement("li");
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
  listItemElements.forEach((element) => {
    if (element.tagHTML) {
      const elementHTML = document.createElement(element.tagHTML);

      for (const key in element) {
        if (element.hasOwnProperty(key) && key !== element.tagHTML) {
          elementHTML.setAttribute(key, element[key]);
        }
      }

      listItemHTML.appendChild(elementHTML);
    } else {
      return;
    }
  });
};
