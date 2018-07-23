import {AsyncStorage} from 'react-native'

export class AsyncStorageUtil {

    /**
     * 取值
     * @param key
     */
    static get(key) {
        return AsyncStorage.getItem(key).then(value => JSON.parse(value));
    }

    /**
     * 存储值
     * @param key
     * @param value
     */
    static set(key, value) {
        AsyncStorage.setItem(key, JSON.stringify(value))
    }

}