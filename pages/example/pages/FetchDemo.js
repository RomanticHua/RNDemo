/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    View, Button, StatusBar
} from 'react-native';
import ScrollViewDemo from "./ScrollViewDemo";

export default class FetchDemo extends Component {

    _login() {
        let url = 'http://api-o2o.storify.cc/user/mobile_login';
        let formData = new FormData();
        formData.append('appkey', 'myorder');
        formData.append('version', '1.1.1');
        formData.append('username', '18627726763');
        formData.append('password', '707729');
        formData.append('_from', 'android');

        let opts = {
            method: 'POST',
            body: formData,//body直接使用 JSON.stringify(data)有时候会参数上传不成功,这时候可以使用FormData
        };
        fetch(url, opts)
        //response.json 返回一个带json对象的promise   response.text 返回一个带文本的promise
            .then(response => response.json())
            .then(responseData => {
                alert(responseData.data.telephone);
            })
            .catch(error => {
                alert(error);
            })

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#FFD700'} //状态栏的背景色
                >
                </StatusBar>

                <Button
                    title='POST请求'
                    onPress={() => this._login()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
