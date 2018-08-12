import  {Component} from 'react';
import { AppRegistry ,NativeModules} from 'react-native';


import { YellowBox } from 'react-native';

import App from "./pages/example/ReduxDemo";
import {createStore} from "redux";
import RootReducers from "./pages/example/RootReducers";
import {Provider} from "react-redux";
import React from "react";
import RootStackNavigator from "./pages/navigator/RootStackNavigator";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger is in a background tab ', 'Module RCTImageLoader']);

class ReduxDemo extends Component {
    render() {
        let store = createStore(RootReducers);
        return (
            <Provider store={store}>
                <RootStackNavigator/>
            </Provider>
        );
    }
}

// 如果要在Android上使用 LayoutAnimation，那么目前还需要在UIManager中启用
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('RNDemo', () => ReduxDemo);
