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
import CustomKeyPage from "../mkw/pages/CustomKeyPage";
import SortKeyPage from "../mkw/pages/SortKeyPage";
import WebViewPage from "../mkw/pages/WebViewPage";
import ArrayExample from "../example/pages/ArrayExample";
import StringExample from "../example/pages/StringExample";
import PrototypeExample from "../example/pages/PrototypeExample";
import LayoutExample1 from "../example/pages/LayoutExample1";
import ConstructorExample from "../example/pages/ConstructorExample";
import LayoutExample3 from "../example/pages/LayoutExample3";
import AboutPage from "../mkw/pages/AboutPage";
import AsyncAwaitExample from "../example/pages/AsyncAwaitExample";
import AnimationFrameExample from "../example/pages/AnimationFrameExample";
import FoldList from "../example/pages/FoldList";
import LayoutAnimations from "../example/pages/LayoutAnimations";
import AboutPage222222 from "../mkw/pages/AboutPage222222";
import ClassExample from "../example/pages/ClassExample";
import DeviceEventEmitterSendExample from "../example/pages/DeviceEventEmitterSendExample";
import DeviceEventReceiveExample from "../example/pages/DeviceEventReceiveExample";
import VideoExample from "../example/pages/VideoExample";
import InterfaceExample from "../example/pages/InterfaceExample";
import ExtendExample from "../example/pages/ExtendExample";
import ClassExtendExample from "../example/pages/ClassExtendExample";
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";
import NavigationExample1 from "../example/navigation/NavigationExample1";
import NavigationExample2 from "../example/navigation/NavigationExample2";
import NavigationExample3 from "../example/navigation/NavigationExample3";
import TopNavigator from "./TopNavigator";
import TouchExample from "../example/pages/TouchExample";


export default RootStackNavigator = createStackNavigator({
    FirstPage: {
        screen: FirstPage,
        navigationOptions: {
            path: '/pages/example/pages/FirstPage'
        }
    },
    ScrollViewDemo,
    FetchDemo,
    SectionListExample,
    CommunicateWithAndroid,
    PickerExample,
    SlideExample,
    KeyboardAvoidingViewExample,
    BottomNavigator,
    CustomKeyPage,
    SortKeyPage,
    WebViewPage,
    ArrayExample,
    StringExample,
    PrototypeExample,
    LayoutExample1,
    ConstructorExample,
    LayoutExample3,
    AboutPage,
    AsyncAwaitExample,
    AnimationFrameExample,
    FoldList,
    LayoutAnimations,
    AboutPage222222,
    ClassExample,
    DeviceEventEmitterSendExample,
    DeviceEventReceiveExample,
    VideoExample,
    InterfaceExample,
    ExtendExample,
    ClassExtendExample,
    NavigationExample1,
    NavigationExample2,
    NavigationExample3,
    TopNavigator,
    TouchExample,
}, {

    headerMode: 'none',// 不要react-navigation默认的返回条
    navigationOptions: {
        // header: null,// 不要react-navigation默认的返回条,两种方式都可以
        // todo 手势无效
        gesturesEnabled: true,

    },

    // 界面切换动画效果
    transitionConfig: () => ({
        /*
         * forHorizontal  水平 这种效果比较好好
         * forVertical    垂直
         * forFadeFromBottomAndroid   看名字应该是只能在android上使用,不设置在andorid上默认是这种效果
         * forFade   只是透明度变化,效果比较怪异
         */
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),


});



