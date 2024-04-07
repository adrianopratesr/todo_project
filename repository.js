const key = "task";

export const addToArrayInLocalStorage = (value) => {
    const readLocalStorage = getFromLocalStorage();
    const currentValue = readLocalStorage ? readLocalStorage : [];

    const newItem = {
        id:getNewId(),
        name: value
    };

    currentValue.push(newItem);
    insertTaskToLocalStorage(currentValue);
    return currentValue;
}

const insertTaskToLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = () => {
    const getLocalStorage = localStorage.getItem(key);
    return JSON.parse(getLocalStorage);
}

export const getNewId = () => {
    return localStorage.length +1
}
