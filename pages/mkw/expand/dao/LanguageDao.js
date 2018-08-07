import React, {Component} from 'react';
import {
    AsyncStorage
} from 'react-native';
import Constant from "../../../tyzg/util/Constant";
import keys from "../../../../res/data/keys"
import langs from "../../../../res/data/langs"
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
                        let data;
                        switch (this.flag) {
                            case Constant.FLAG_LANGUAGE.POPULAR://热门页面
                                data = keys;
                                break;
                            case Constant.FLAG_LANGUAGE.TRENDING://趋势页面
                                data = langs;
                                break;
                            default:
                                data = null;
                        }
                        this.save(data);
                        resolve(data);
                    }
                }
            })
        })

    }

    save(data) {
        AsyncStorageUtil.set(this.flag, data)
    }
}