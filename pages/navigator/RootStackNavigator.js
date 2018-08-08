import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import FirstPage from "../example/pages/FirstPage";
import ScrollViewDemo from "../example/pages/ScrollViewDemo";
import FetchDemo from "../example/pages/FetchDemo";
import SectionListExample from "../example/pages/SectionListExample";
import CommunicateWithAndroid from "../example/pages/CommunicateWithAndroid";
import PickerExample from "../example/pages/PickerExample";
import SlideExample from "../example/pages/SlideExample";
import KeyboardAvoidingViewExample from "../example/pages/KeyboardAvoidingViewExample";
import BottomNavigator from "./BottomNavigator";
import MyPage from "../mkw/pages/MyPage";
import CustomKeyPage from "../mkw/pages/CustomKeyPage";
import SortKeyPage from "../mkw/pages/SortKeyPage";
import WebViewPage from "../mkw/pages/WebViewPage";
import ArrayExample from "../example/pages/ArrayExample";
import StringExample from "../example/pages/StringExample";
import PrototypeExample from "../example/pages/PrototypeExample";
import LayoutExample1 from "../example/pages/LayoutExample1";
import ConstructorExample from "../example/pages/ConstructorExample";
import LayoutExample3 from "../example/pages/LayoutExample3";


export default RootStackNavigator = createStackNavigator({
    FirstPage,
    ScrollViewDemo,
    FetchDemo,
    SectionListExample,
    CommunicateWithAndroid,
    PickerExample,
    SlideExample,
    KeyboardAvoidingViewExample,
    BottomNavigator,
    MyPage,
    CustomKeyPage,
    SortKeyPage,
    WebViewPage,
    ArrayExample,
    StringExample,
    PrototypeExample,
    LayoutExample1,
    ConstructorExample,
    LayoutExample3,


}, {
    navigationOptions: {
        header: null
    }
});



