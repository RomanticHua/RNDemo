/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Keyboard,
} from 'react-native';
import Constant from "./util/Constant";
import {AsyncStorageUtil} from "./util/AsyncStorageUtil";
import LoadingModal from "./util/LoadingModal";
import Toast from "react-native-easy-toast";
import CheckBox from "react-native-check-box";

export default class LoginPage extends Component<> {
    //    ../ 表示上级目录  ./ 表示当前目录

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',

        };
    }


    _onChangeUserName(userName) {
        this.setState({
            userName: userName,
        });
    }

    _onChangePassword(password) {
        this.setState({
            password: password,
        });
    }


    login() {

        if (!this.state.userName) {
            this.toast.show('用户名为空');
            return;
        }
        if (!this.state.password) {
            this.toast.show('密码为空');
            return;
        }
        this.toast.show('登录中');
        this.loadingModal.show();
        let url = 'http://api-o2o.storify.cc/user/mobile_login';
        let formData = new FormData();
        formData.append('appkey', 'myorder');
        formData.append('version', '1.1.1');
        formData.append('username', this.state.userName);
        formData.append('password', this.state.password);
        /*    formData.append('username', '18627726763');
            formData.append('password', '707729');*/
        formData.append('_from', 'android');
        let opts = {
            method: 'POST',
            body: formData,
        };

        /*数据格式为 {status:0,msg:xxx,data:{}}
        status 请求标志,0为成功
        msg 提示信息
        data 数据*/
        fetch(url, opts)
            .then(response => response.json())
            .then(bean => {
                if (bean.status !== 0) {
                    return Promise.reject(bean.msg);
                } else {
                    return bean.data;
                }
            })
            .then(data => {
                console.log(data);
                // alert(data.telephone);
                //存储token
                AsyncStorageUtil.set(Constant.LOGIN.TOKEN, data.apptoken);
            })
            .catch(error => {
                alert(error);
            })
            .finally(() => {
                setTimeout(() => {
                    this.loadingModal.hide();
                }, 2000);

            })
    }

    checkProtocol() {
        this.toast.show('点击了');
    }

    forgetPassword() {
        this.toast.show('忘记密码');
    }

    render() {
        return (
            <View style={styles.flex}>

                <StatusBar
                    hidden={false}
                    animated={false}
                    backgroundColor={'#0000'} //状态栏的背景色
                    translucent={true} //这样可以隐藏状态栏
                >
                </StatusBar>

                <Image
                    style={styles.background}
                    source={require('../../res/image/bg_login.png')}
                />

                <Image
                    style={styles.ic_brand}
                    source={require('../../res/image/ic_brand.png')}
                />

                <View style={styles.view_username}>
                    <Image
                        style={styles.ic_phone}
                        source={require('../../res/image/ic_zh.png')}
                    />
                    <View style={styles.view_divider}/>
                    <TextInput
                        style={styles.input_username}
                        underlineColorAndroid={'transparent'}
                        keyboardType={'numeric'}
                        placeholder={'请输入用户名'}
                        placeholderTextColor={'#e1e1e1'}
                        onChangeText={(userName) => this._onChangeUserName(userName)}
                        returnKeyType={'next'}
                    />
                </View>
                <View style={[styles.view_username, {marginTop: 20}]}>
                    <Image
                        style={styles.ic_phone}
                        source={require('../../res/image/ic_mm.png')}
                    />
                    <View style={styles.view_divider}/>
                    <TextInput
                        style={styles.input_password}
                        underlineColorAndroid={'transparent'}
                        keyboardType={'numeric'}
                        secureTextEntry={true} /*类似于password*/
                        placeholder={'请输入用户名'}
                        placeholderTextColor={'#e1e1e1'}
                        onChangeText={(password) => this._onChangePassword(password)}
                        returnKeyType={'search'}
                    />
                </View>

                <View style={styles.view_another}>
                    <View style={styles.view_protocol}>
                        <CheckBox
                            onClick={() => this.checkProtocol()}
                            style={styles.check_box}
                            checkedImage={<Image source={require('../../res/image/ic_rb_checked.png')}
                                                 style={styles.cb}/>}
                            unCheckedImage={<Image source={require('../../res/image/ic_rb_unchecked.png')}
                                                   style={styles.cb}/>}

                        />
                        <Text style={styles.text_protocol}>已阅读用户协议</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={Constant.ACTIVE_OPACITY}
                        onPress={() => this.forgetPassword()}
                    >
                        <Text style={styles.text_protocol}>忘记密码</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    activeOpacity={Constant.ACTIVE_OPACITY}
                    style={styles.view_login}
                >
                    <Text style={styles.text_login}
                          onPress={() => this.login()}
                    >登录</Text>
                </TouchableOpacity>


                <LoadingModal
                    ref={loadingModal => this.loadingModal = loadingModal}
                />
                <Toast
                    ref={toast => this.toast = toast}
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    background: {
        resizeMode: 'stretch',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    ic_brand: {
        marginTop: 50,
        alignSelf: 'center',
        width: 80,
        height: 70,
        resizeMode: 'cover'
    },
    view_username: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 40,
        margin: 20,
        overflow: 'hidden',
    },
    ic_phone: {
        width: 20,
        height: 35,
        resizeMode: 'contain'
    },
    view_divider: {
        width: 1,
        height: 30,
        backgroundColor: '#b2b2b2',
        marginLeft: 5,
        marginRight: 5,
    },
    input_username: {
        padding: 0,
        color: '#232323',
        fontSize: 16,
        flex: 1,
    },
    input_password: {
        padding: 0,
        color: '#232323',
        fontSize: 16,
        flex: 1,
    },
    view_login: {
        backgroundColor: '#f08200',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f08200',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 5,
    },
    text_login: {
        color: 'white',
        fontSize: 22,
    },
    view_another: {
        margin: 20,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    check_box: {
        width: 20,
        height: 20,
    },
    view_protocol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_protocol: {
        fontSize: 16,
        color: 'black',
        marginLeft: 5,

    },
    cb: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    }

});
