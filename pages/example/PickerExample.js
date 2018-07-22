/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Picker,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PickerExample extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>语言格式为:{this.state.language}</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color:'red',
        fontSize:18,
        alignSelf:'center',
        marginBottom:20,
    },

});
