import React, {Component} from 'react';
import {
    AsyncStorage
} from 'react-native';
import Constant from "../../../tyzg/util/Constant";
import keys from "../../../../res/data/keys"
import {AsyncStorageUtil} from "../../../tyzg/util/AsyncStorageUtil";

export default class LanguageDao {
    constructor(flag) {
        this.flag = flag;
    }

    fetch() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.flag, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result) {
                        //如果有值,返回json对象,
                        try {
                            resolve(JSON.parse(result));
                        } catch (e) {
                            reject(e);
                        }

                    } else {
                        //如果没有值,返回默认的值
                        let data = this.flag === Constant.KEY.LANGUAGE ? keys : null;
                        this.save(data);
                        resolve(data);
                    }
                }
            })
        })

    }

    save(data) {
        AsyncStorageUtil.set(this.flag,data)
    }
}