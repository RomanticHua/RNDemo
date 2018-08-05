import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PrototypeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    trim() {
        let str = '     abc     ';
        console.log('开始' + str + '结束');
        // ^表示正则表达式开始 $表示正则表达式结束 \s表示空格 /g表示全局执行,查找所有匹配而非在找到第一个匹配后停止
        let newStr = str.replace(/(^\s*)|(\s*$)/g, '');
        console.log('开始' + newStr + '结束');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'利用正则表达式取出前后空格'}
                    onPress={() => this.trim()}
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
