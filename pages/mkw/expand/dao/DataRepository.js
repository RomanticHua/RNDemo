import {
    AsyncStorage
} from 'react-native';
import {AsyncStorageUtil} from "../../../tyzg/util/AsyncStorageUtil";
import Constant from "../../../tyzg/util/Constant";

const TIP_OVERTIME = '超过缓存时间,从服务器获取最新数据';
const TIP_LOAD_DATA_FROM_LOCAL = '从本地加载数据';
const TIP_LOAD_DATA_FROM_NET = '从网络获取数据';
const TIP_NO_DATA_LOCAL = '本地无数据';
const TIP_PARSE_ERROR = '解析异常';
const TIP_LOCAL_ERROR = '本地异常';

export default class DataRepository {
    /**
     * 加载数据,先从本地加载,如果本地没有数据,或者超过缓存是时间,那么从网络获取.
     */
    fetchRepository(url) {
        return new Promise(((resolve, reject) => {
            this.fetLocalRepository(url)
                .then(value => {
                    if (value) {
                        resolve(value);
                    } else {
                        this.fetchNetRepository(url)
                            .then(value => {
                                resolve(value);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    }
                })
                .catch(() => {
                    this.fetchNetRepository(url)
                        .then(value => {
                            resolve(value);
                        })
                        .catch(err => {
                            reject(err);
                        })
                })

        }))
    }

    /**
     * 从网络获取数据
     */
    fetchNetRepository(url) {
        return new Promise(((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(result => {
                    if (!result) {
                        reject('数据为空!');
                        return;
                    }
                    console.log(TIP_LOAD_DATA_FROM_NET);
                    resolve(result);
                    this.saveToLocal(url, result);
                })
                .catch(error => reject(error));

        }))
    }

    /**
     * 保存到本地
     */
    saveToLocal(url, value) {
        if (!url || !value) {
            return;
        }
        let update_time = new Date().getTime();
        let wrapData = {update_time: update_time, value: value};
        AsyncStorage.setItem(url, JSON.stringify(wrapData));
    }

    /**
     * 检查缓存时间,是否超时
     */
    checkTime(time) {
        let currentTime = new Date().getTime();
        return currentTime - time <= Constant.DATA_CACHE_VALID_TIME;
    }

    /**
     * 返回缓存的本地数据
     */
    fetLocalRepository(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (err, result) => {

                if (!err) {
                    if (result) {
                        try {
                            //先转换成对象
                            let value = JSON.parse(result);
                            //检查时间
                            if (this.checkTime(value.update_time)) {
                                console.log(TIP_LOAD_DATA_FROM_LOCAL);
                                resolve(value.value);
                            } else {
                                console.log(TIP_OVERTIME);
                                reject(TIP_OVERTIME);
                            }
                        } catch (e) {
                            reject(TIP_PARSE_ERROR);
                            reject(e);
                        }
                    } else {
                        reject(TIP_NO_DATA_LOCAL);
                    }

                } else {
                    console.log(TIP_LOCAL_ERROR);
                    reject(err);
                }
            })
        })
    }

}