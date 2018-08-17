import React, {Component} from 'react';
import {Image, Text} from 'react-native';

export default class TabBarComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <Text>我是底部</Text>

        );
    }
}