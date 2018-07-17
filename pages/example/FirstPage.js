/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    View, Button
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Button
                    title={'firstPage'}
                    onPress={()=>{

                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
