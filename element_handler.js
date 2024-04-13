export const listItemGenerator = (liTextContent, liCheckboxStatus) => {
  const listItemHTML = document.createElement("li");
  listItemHTML.textContent = liTextContent;

  appendElementsToListItem(listItemHTML, liCheckboxStatus);

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

const appendElementsToListItem = (listItemHTML, liCheckboxStatus) => {
  if (listItemHTML && listItemElements.length > 0) {
    listItemElements.forEach((element) => {
      if (element.tagHTML) {
        const elementHTML = document.createElement(element.tagHTML);

        for (const key in element) {
          if (element.hasOwnProperty(key) && key !== "tagHTML") {
            elementHTML.setAttribute(key, element[key]);

            if (element[key] === "checkbox") {
              elementHTML.checked = liCheckboxStatus;
            }
          }
        }
        listItemHTML.appendChild(elementHTML);
      }
    });
  }
};
