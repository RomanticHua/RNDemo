import React, {Component} from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View, Alert, Text} from 'react-native';
import KeyboardAvoidingViewExample from "./KeyboardAvoidingViewExample";
import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../../mkw/view/CustomTitle";
import MyPage from "../../mkw/pages/MyPage";
import SortKeyPage from "../../mkw/pages/SortKeyPage";
import ArrayExample from "./ArrayExample";
import StringExample from "./StringExample";
import PrototypeExample from "./PrototypeExample";

const colors = ['#FF6347', '#FF7F24', '#D15FEE', '#CD0000', '#9ACD32', '#76EE00', '#40E0D0', '#00EE00'];
const arrays = [
    {name: 'ScrollView案例', key: 'ScrollViewDemo'},
    {name: 'Fetch案例', key: 'FetchDemo'},
    {name: 'SectionList案例', key: 'SectionListExample'},
    {name: '与Android交互', key: 'CommunicateWithAndroid'},
    {name: 'Picker案例', key: 'PickerExample'},
    {name: 'Slide案例', key: 'SlideExample'},
    {name: 'KeyboardAvoidingView案例', key: 'KeyboardAvoidingViewExample'},
    {name: 'BottomNavigator案例', key: 'BottomNavigator'},
    {name: 'MyPage案例', key: 'MyPage'},
    {name: '标签分类', key: 'SortKeyPage'},
    {name: 'Array案例', key: 'ArrayExample'},
    {name: 'String案例', key: 'StringExample'},
    {name: 'Prototype案例', key: 'PrototypeExample'},
]
export default class FirstPage extends Component {

    /**
     * 生成随机颜色
     * @returns {string}
     */
    getBackgroundColor() {
        let index = parseInt(Math.random() * colors.length);
        return colors[index];
    }

    renderViewArray() {
        const {navigate} = this.props.navigation;
        let viewArray = [];
        arrays.forEach((item, index) => {
            let marginTop = index === 0 ? 0 : 10;
            let backgroundColor = this.getBackgroundColor();
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
