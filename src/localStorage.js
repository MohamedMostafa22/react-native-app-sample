import { AsyncStorage } from "react-native";
import isString from 'lodash/isString';

async function saveToStorage(key, value) {
    if (!key || !isString(key) || value === undefined)
        return;
    try {
        await AsyncStorage.setItem(key, value);
        const res = await AsyncStorage.getItem(key);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

async function getFromStorage(key) {
    if (!key || !isString(key))
        return;
    try {
        const res = await AsyncStorage.getItem(key);
        return res;
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

async function removeFromStorage(key) {
    if (!key || !isString(key))
        return;
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

export {
    saveToStorage,
    getFromStorage,
    removeFromStorage
}