import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import codePush from 'react-native-code-push';

export default class CodePushExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    update() {
        codePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix: '更新内容',
                title: '更新',
                mandatoryUpdateMessage: '',
                mandatoryContinueButtonLabel: '更新',
            },
            mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
        });

    }
    // title={'CodePush更新' }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'CodePush更新前的标题'}
                    onPress={() => this.update()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
