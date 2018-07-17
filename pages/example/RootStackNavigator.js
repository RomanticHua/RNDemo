/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import FirstPage from "./FirstPage";

export default RootStackNavigator = createStackNavigator({
    FirstPage: FirstPage
}, {
    navigationOptions: {
        header: null
    }
});



