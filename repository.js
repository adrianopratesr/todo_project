const key = "task";

export const addToArrayInLocalStorage = (value) => {
  const readLocalStorage = getFromLocalStorage();
  const currentValue = readLocalStorage ? readLocalStorage : [];

  const newItem = {
    id: getNewId(),
    name: value,
    status: false,
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
  const data = getFromLocalStorage();
  return data ? data.length + 1 : 1;
};

export const updateFromLocalStorage = (id) => {
  const ls = getFromLocalStorage();

  localStorage.removeItem(key);
  const updateLs = ls.map((item) => {
    if (item.id === id) {
      return { ...item, status: item.status === true ? false : true };
    }
    return item;
  });

  insertToLocalStorage(updateLs);
};
