import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
} from 'react-native';
import Constant from "../../tyzg/util/Constant";

export default class DeviceEventEmitterSendExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    sendMsg() {
        DeviceEventEmitter.emit(Constant.REFRESH_DATA,'刷新数据');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'发送消息'}
                    onPress={() => this.sendMsg()}
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
