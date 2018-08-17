import React, {Component} from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View, Alert, Text} from 'react-native';
import KeyboardAvoidingViewExample from "./KeyboardAvoidingViewExample";
import SortKeyPage from "../../mkw/pages/SortKeyPage";
import ArrayExample from "./ArrayExample";
import StringExample from "./StringExample";
import PrototypeExample from "./PrototypeExample";
import ConstructorExample from "./ConstructorExample";
import CustomKeyPage from "../../mkw/pages/CustomKeyPage";
import AsyncAwaitExample from "./AsyncAwaitExample";
import AnimationFrameExample from "./AnimationFrameExample";
import LayoutAnimations from "./LayoutAnimations";
import DeviceEventEmitterSendExample from "./DeviceEventEmitterSendExample";
import DeviceEventReceiveExample from "./DeviceEventReceiveExample";
import VideoExample from "./VideoExample";
import InterfaceExample from "./InterfaceExample";
import ClassExtendExample from "./ClassExtendExample";
import NavigationExample1 from "../navigation/NavigationExample1";

const colors = ['#FF6347', '#FF7F24', '#D15FEE', '#CD0000', '#9ACD32', '#76EE00', '#40E0D0', '#00EE00'];
const arrays = [
    {name: 'BottomNavigator案例', key: 'BottomNavigator'},
    {name: 'NavigationExample1案例', key: 'NavigationExample1'},
    {name: 'ClassExtend案例', key: 'ClassExtendExample'},
    {name: 'Class 案例', key: 'ClassExample'},
    {name: 'Interface案例', key: 'InterfaceExample'},
    {name: 'Extend案例', key: 'ExtendExample'},
    {name: 'Video 案例', key: 'VideoExample'},
    {name: 'DeviceEventReceiveExample 案例', key: 'DeviceEventReceiveExample'},
    {name: 'DeviceEventEmitterSendExample 案例', key: 'DeviceEventEmitterSendExample'},
    {name: 'AnimationFrame案例', key: 'AnimationFrameExample'},
    {name: 'AboutPage222222', key: 'AboutPage222222'},
    {name: 'FoldList 案例', key: 'FoldList'},
    {name: 'LayoutAnimations 案例', key: 'LayoutAnimations'},
    {name: 'Async Await 案例', key: 'AsyncAwaitExample'},
    {name: '标签分类', key: 'SortKeyPage'},
    {name: '自定义标签', key: 'CustomKeyPage'},
    {name: '布局demo1', key: 'LayoutExample1'},
    {name: '构造方法Demo', key: 'ConstructorExample'},
    {name: '布局demo3', key: 'LayoutExample3'},
    {name: 'ScrollView案例', key: 'ScrollViewDemo'},
    {name: 'Fetch案例', key: 'FetchDemo'},
    {name: 'SectionList案例', key: 'SectionListExample'},
    {name: '与Android交互', key: 'CommunicateWithAndroid'},
    {name: 'Picker案例', key: 'PickerExample'},
    {name: 'Slide案例', key: 'SlideExample'},
    {name: 'KeyboardAvoidingView案例', key: 'KeyboardAvoidingViewExample'},
    {name: 'Array案例', key: 'ArrayExample'},
    {name: 'String案例', key: 'StringExample'},
    {name: 'Prototype案例', key: 'PrototypeExample'},

];
export default class FirstPage extends Component {

    /**
     * 生成随机颜色
     * @returns {string}
     */
    getBackgroundColor(index) {
        // let index = parseInt(Math.random() * colors.length);
        // return colors[index];

        return colors[index % colors.length];
    }

    renderViewArray() {
        const {navigate} = this.props.navigation;
        let viewArray = [];
        arrays.forEach((item, index) => {
            let marginTop = index === 0 ? 0 : 10;
            let backgroundColor = this.getBackgroundColor(index);
            viewArray.push(
                <Text
                    style={[styles.item, {marginTop: marginTop, backgroundColor: backgroundColor}]}
                    key={index}
                    onPress={() => {
                        navigate(item.key);
                    }}
                >{item.name}</Text>
            );
        });
        return viewArray;
    }

    render() {

        return (
            <View style={styles.container}>

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
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        padding: 10,
        fontSize: 16,
        backgroundColor: 'red'
    }

});
