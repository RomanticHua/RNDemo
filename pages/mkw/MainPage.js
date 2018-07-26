import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
export  {BottomNavigator} from '../navigator/RootStackNavigator'

export default class App extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            BottomNavigator
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
