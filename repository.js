const key = "task";

export const addToArrayInLocalStorage = (value) => {
    const readLocalStorage = getFromLocalStorage();
    const currentValue = readLocalStorage ? readLocalStorage : [];
    currentValue.push(value);
    insertTaskToLocalStorage(JSON.stringify(currentValue));
    return currentValue;
}

const insertTaskToLocalStorage = (value) => {
    localStorage.setItem(key, value);
}

export const getFromLocalStorage = () => {
    const getLocalStorage = localStorage.getItem(key);
    return JSON.parse(getLocalStorage);
}
