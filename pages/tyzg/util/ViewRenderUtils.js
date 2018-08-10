import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image, TouchableOpacity,
} from 'react-native';

export default class ViewRenderUtils {

    /**
     * 创建分割线
     */

    static renderLine() {
        return <View style={styles.line}/>;
    }
}

const styles = StyleSheet.create({

    line: {
        height: 0.5,
        backgroundColor: 'darkgray'
    },
});