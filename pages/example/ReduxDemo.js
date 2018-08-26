import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, reduceTodo, updateText, delayUpdateAction, delayAdd} from './Actions';
import delayUpdateRedux from "./DelayUpdate";

const {width, height} = Dimensions.get('window');

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dispatch, counter, todos, delayUpdateRedux} = this.props;
        let {num} = counter;
        let {text} = todos;

        let delayText = delayUpdateRedux.delay;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.row} onPress={() => {
                    dispatch(addTodo(++num))
                }}>
                    <Text>点击就加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    dispatch(reduceTodo(--num))
                }}>
                    <Text>点击就减1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    dispatch(updateText("ReactNative"))
                }}>
                    <Text>修改Text值</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    dispatch(delayUpdateAction('love'))
                }}>
                    <Text>修改延时Text的值</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    dispatch(delayAdd(++num))
                }}>
                    <Text>延时增加</Text>
                </TouchableOpacity>
                <View style={[styles.row, styles.text]}>
                    <Text>当前num值是：<Text style={styles.red}>{num}</Text>，当前的Text值是：<Text style={styles.red}>{text}</Text></Text>
                </View>
                <Text
                    style={{
                        backgroundColor: '#f0f0f0',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        padding: 10,
                        marginTop: 10,
                        alignSelf:'stretch'

                    }}>{delayText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    row: {
        height: 40,
        width: width,
        marginTop: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#aaa',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        backgroundColor: '#f0f0f0',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    red: {
        color: 'red',
    }
});
//这是你自己编写的一个函数。这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。
//这个函数的作用是确定哪些 Redux 全局的 state 是我们组件想要通过 props 获取的
function mapStateToProps(state) {
    const {todos, counter,delayUpdateRedux} = state;
    return {
        todos,
        counter,
        delayUpdateRedux,
    }

}

export default connect(mapStateToProps)(ReduxDemo);