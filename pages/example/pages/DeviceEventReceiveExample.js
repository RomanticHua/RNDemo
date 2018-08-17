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
import DeviceEventEmitterSendExample from "./DeviceEventEmitterSendExample";

export default class DeviceEventReceiveExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '默认值',
        }
    }

    componentDidMount() {
        //注册监听
        this.refreshListener = DeviceEventEmitter.addListener(Constant.REFRESH_DATA, this.refreshData)
    }

    componentWillUnmount() {
        //取消监听
        this.refreshListener.remove();
    }

    //刷新数据
    refreshData = (data) => {
        this.setState({
            data: data,
        });
    };


    sendMsg() {
        DeviceEventEmitter.emit(Constant.REFRESH_DATA, '刷新数据');
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title={'发送消息'}
                    onPress={() => this.sendMsg()}
                />
                <Text>{this.state.data}</Text>
                <Button
                    title={'跳转到发送界面'}
                    onPress={() => {
                        navigate('DeviceEventEmitterSendExample')
                    }}
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
