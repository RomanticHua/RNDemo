/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import FirstPage from "../example/FirstPage";
import ScrollViewDemo from "../example/ScrollViewDemo";
import FetchDemo from "../example/FetchDemo";
import SectionListExample from "../example/SectionListExample";
import CommunicateWithAndroid from "../example/CommunicateWithAndroid";

export default RootStackNavigator = createStackNavigator({
    FirstPage: FirstPage,
    ScrollViewDemo: ScrollViewDemo,
    FetchDemo: FetchDemo,
    SectionListExample:SectionListExample,
    CommunicateWithAndroid:CommunicateWithAndroid,
}, {
    navigationOptions: {
        header: null
    }
});


