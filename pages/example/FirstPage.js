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
import SectionListExample from "./SectionListExample";
import CommunicateWithAndroid from "./CommunicateWithAndroid";

export default class App extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    // animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#FFD700'} //状态栏的背景色
                    //translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    //barStyle={'default'} // enum('default', 'light-content', 'dark-content')//状态栏字体颜色
                >
                </StatusBar>

                <ScrollView style={styles.container}>
                    <Button
                        title={'ScrollViewDemo'}
                        onPress={() => {
                            navigate('ScrollViewDemo');
                        }}
                    />
                    <View style={styles.item}>
                        <Button
                            title={'FetchDemo'}
                            onPress={() => {
                                navigate('FetchDemo');
                            }}
                        />
                    </View>
                    <View style={styles.item}>
                        <Button
                            title={'SectionListExample'}
                            onPress={() => {
                                navigate('SectionListExample');
                            }}
                        />
                    </View>
                    <View style={styles.item}>
                        <Button
                            title={'CommunicateWithAndroid'}
                            onPress={() => {
                                navigate('CommunicateWithAndroid');
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginTop: 10,
    }

});
