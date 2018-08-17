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

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
