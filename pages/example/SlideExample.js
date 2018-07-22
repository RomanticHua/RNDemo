

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Slider
} from 'react-native';

export default class SlideExample extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
