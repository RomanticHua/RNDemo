import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

export default class KeyboardAvoidingViewExample extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
            {/*    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>*/}
                <ScrollView style={styles.container}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'#0000'}
                        placeholder={'一个简单的输入框1'}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'#0000'}
                        placeholder={'一个简单的输入框2'}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'#0000'}
                        placeholder={'一个简单的输入框3'}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'#0000'}
                        placeholder={'一个简单的输入框4'}
                    />
                </ScrollView>
               {/* </KeyboardAvoidingView>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        height: 240,
        padding: 10,
        margin: 20,
    }
});
