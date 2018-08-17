import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {AsyncStorageUtil} from "../../tyzg/util/AsyncStorageUtil";
import NavigationExample3 from "./NavigationExample3";

export default class NavigationExample2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        /**
         * state 里面包含三个参数
         * key: 上一个界面的key, 这个key是动态生成的,goBack(key)的时候可以指定key,这个方式比较麻烦
         * params: 开发者自定义的参数
         * routeName: 当前界面的路由名.
         */

        const {navigation} = this.props;
        const {navigate, goBack, state} = navigation;
        console.log(navigation);
        return (
            <View style={styles.container}>
                <Button
                    title={'返回第一个页面并携带参数'}
                    onPress={() => {
                        state.params.callback('我是第二个页面返回携带的参数');
                        goBack();
                    }}
                />
                <Text>{state.params.txt}</Text>

                <Button
                    title={'跳转到第三个界面'}
                    onPress={() => {
                        navigate('NavigationExample3');
                    }}
                />
                <Button
                    title={'跳转到第三个界面携带key'}
                    onPress={() => {
                        navigate('NavigationExample3', {key: state.key});
                    }}
                />
                <Text style={{backgroundColor:'red',fontSize:16}}>我是文本</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
