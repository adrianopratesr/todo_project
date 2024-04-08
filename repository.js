const key = "task";

export const addToArrayInLocalStorage = (value) => {
  const readLocalStorage = getFromLocalStorage();
  const currentValue = readLocalStorage ? readLocalStorage : [];

  const newItem = {
    id: getNewId(),
    name: value,
  };

  currentValue.push(newItem);
  insertToLocalStorage(currentValue);
  return newItem.id;
};

const insertToLocalStorage = (value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = () => {
  const getLocalStorage = localStorage.getItem(key);
  return JSON.parse(getLocalStorage);
};

export const removeFromLocalStorage = (id) => {
  const ls = getFromLocalStorage();

  localStorage.removeItem(key);
  const indexItem = ls.findIndex((lsItem) => lsItem.id === id);

  if (indexItem !== -1) {
    ls.splice(indexItem, 1);
  }

  insertToLocalStorage(ls);
};

export const getItemById = (id) => {
  const ls = getFromLocalStorage();

  return ls.find((item) => item.id == id);
};

const getNewId = () => {
  return localStorage.length + 1;
};
