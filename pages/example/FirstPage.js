/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
const arrays = ['ScrollViewDemo', 'FetchDemo', 'SectionListExample', 'CommunicateWithAndroid', 'PickerExample','SlideExample'];
export default class App extends Component {

    renderViewArray() {
        const {navigate} = this.props.navigation;
        let viewArray = [];
        arrays.forEach((value, index) => {
            let item = <View style={styles.item} key={index}>
                <Button
                    title={value}
                    onPress={() => {
                        navigate(value);
                    }}
                />
            </View>;
            viewArray.push(item);
        });
        return viewArray;
    }

    render() {

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
                    {this.renderViewArray()}
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
