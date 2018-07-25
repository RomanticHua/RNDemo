import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
    Alert,
    DeviceEventEmitter,
    ToastAndroid, Button
} from 'react-native';
/*在React Naitve层，RN端可通过 NativeModules.[module名].[方法名]来调起原生的方法，
同时也可以通过RN端可通过 NativeModules.[module名].[参数名]的方式来获取传递的参数*/



export default class CommunicateWithAndroid extends Component<> {

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    NativeModules.ToastForAndroid.show(1000);
                }}
                      style={styles.text}
                >最简单直接的方式</Text>

                <Text onPress={() => {
                    NativeModules.ToastForAndroid.testAndroidCallbackMethod('helloWorld', msg => Alert.alert(msg))
                }}
                      style={styles.text}
                >回调的方式,此方式可以相互传递参数</Text>

                <Text
                    style={styles.text}
                    onPress={() => {
                        NativeModules.ToastForAndroid.textAndroidPromiseMethod('abc').then(result => {
                            alert(result);
                        })
                    }}
                >利用Promise来通信</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
    }
});
