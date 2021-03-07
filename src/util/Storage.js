const setStorage = (key, value) => {
    window.localStorage.setItem(key, value);

    return true;
}

const getStorage = (key) => {
    return window.localStorage.getItem(key);
}

const clearStorage = () => {
    window.localStorage.clear();

    return true;
}

const removeStorage = (key) => {
    window.localStorage.removeItem(key);

    return true;
}

export {setStorage, getStorage, clearStorage, removeStorage}