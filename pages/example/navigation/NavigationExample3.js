import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation'
import NavigationExample1 from "./NavigationExample1";

export default class NavigationExample3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {navigation} = this.props;
        const {navigate, goBack, state} = navigation;
        return (
            <View style={styles.container}>
                <Button
                    title={'重置回到第一个界面'}
                    onPress={() => {
                        //把栈里面的额组件全部推出
                        let resetAction = StackActions.reset(
                            {
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'NavigationExample1',
                                        params: '第三个界面数据',
                                    }),
                                ],
                                key: null
                            }
                        );
                        navigation.dispatch(resetAction);
                    }}
                />

                <Button
                    // push 每次都会在栈顶添加一个界面,
                    title={'push操作'}
                    onPress={() => {
                        navigation.push('NavigationExample3')
                    }}
                />
                <Button
                    // pop(n) n指定要多少个界面出栈,默认是一个
                    title={'pop操作,数量1'}
                    onPress={() => {
                        // navigation.pop(1);
                        navigation.pop();
                    }}
                />
                <Button
                    // pop(n) n指定要多少个界面出栈
                    title={'pop操作,数量2'}
                    onPress={() => {
                        navigation.pop(2);
                    }}
                />
                <Button
                    // 回到栈顶,将其他的界面全部出栈.
                    title={'回到栈顶'}
                    onPress={() => {
                        navigation.popToTop();
                    }}
                />
                <Button
                    title={'push页面1'}
                    onPress={() => {
                        navigation.push('NavigationExample1')
                    }}
                />
                <Button
                    // 这里是直接返回了页面1,把中间的其他页面全部关闭了
                    title={'navigate到页面1'}
                    onPress={() => {
                        navigate('NavigationExample1');
                    }}
                />
                <Button
                    //key是动态变化的.
                    title={'通过key返回第一个页面'}
                    onPress={() => {
                        goBack(state.params.key)
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
