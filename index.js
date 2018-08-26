import {Component} from 'react';
import {AppRegistry, NativeModules} from 'react-native';


import {YellowBox} from 'react-native';

import App from "./pages/example/ReduxDemo";
import {createStore, applyMiddleware} from "redux";
import RootReducers from "./pages/example/RootReducers";
import {Provider} from "react-redux";
import React from "react";
import RootStackNavigator from "./pages/navigator/RootStackNavigator";
import logger, {createLogger} from 'redux-logger'
import trunk from 'redux-thunk'


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger is in a background tab ', 'Module RCTImageLoader']);

class ReduxDemo extends Component {
    render() {
        //Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions (#20).
        //logger必须是最后一中间件
        let store = createStore(RootReducers, applyMiddleware(trunk,logger));
        return (
            <Provider store={store}>
                <RootStackNavigator/>
            </Provider>
        );
    }
}

// 如果要在Android上使用 LayoutAnimation，那么目前还需要在UIManager中启用
const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('RNDemo', () => ReduxDemo);
