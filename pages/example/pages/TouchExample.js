import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Constant from "../../tyzg/util/Constant";

export default class TouchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }

    }

    componentDidMount() {
        this.delayHide()
    }

    //Image View 不能响应点击事件.

    //能响应点击事件的只有 Touchable 组件和 Text , Button
    render() {
        let innerView = this.state.visible ?
            <View style={{backgroundColor: 'red', width: 30, height: 30,}}/> : null;
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    console.log('点击了文本');
                }}>点击</Text>

                <Image
                    source={require('../../../res/image/ic_custom_language.png')}
                    onPress={() => {
                        console.log('点击了图片');
                    }}
                />
                <View
                    style={{backgroundColor: 'red', width: 30, height: 30,}}
                    onPress={() => {
                        console.log('点击了view');
                    }}>

                </View>

                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#0f03',
                        margin: 40,
                        alignItems: 'center',
                        padding: 10,
                    }}
                    activeOpacity={Constant.ACTIVE_OPACITY}
                    onPress={() => {
                        this.setState({visible: !this.state.visible});
                        this.delayHide();
                    }}
                >
                    <Text>点击</Text>
                    {innerView}
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 延时隐藏view
     */
    delayHide() {
        this.timer && clearTimeout(this.timer);
        if (!this.state.visible) {
            this.timer = setTimeout(() => {
                this.setState({visible: false})
            }, 1500);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
