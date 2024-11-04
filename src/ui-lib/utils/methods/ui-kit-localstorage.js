const LOCAL_STORAGE_KEY = 'ui-kit-settings';
const getLocalStorage = () => {
    const localString = localStorage.getItem(LOCAL_STORAGE_KEY);
    let storage = {};
    try {
        if (localString) {
            storage = JSON.parse(localString);
        }
    }
    catch (e) {
        console.error(`Ошибка получения значения ${LOCAL_STORAGE_KEY} из localstorage`);
    }
    return storage;
};
const setLocalStorageValue = (key, value) => {
    let storage = getLocalStorage();
    storage = { ...storage, [key]: value };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
};
const getLocalStorageValue = (key) => {
    const storage = getLocalStorage();
    return storage[key];
};

export { getLocalStorageValue, setLocalStorageValue };
