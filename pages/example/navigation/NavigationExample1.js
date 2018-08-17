import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavigationExample2 from "./NavigationExample2";

export default class NavigationExample1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '初始值',
        }
    }

    render() {
        const {navigation} = this.props;
        const {navigate, goBack, state} = navigation;
        return (
            <View style={styles.container}>
                <Button
                    title={'通过回调函数得到下个界面的返回值'}
                    onPress={() => {
                        navigate('NavigationExample2', {
                            callback: (data) => {
                                this.setState({data})
                            },
                            txt: '我是第一个页面的参数'
                        })
                    }}
                />
                <Text>{this.state.data}</Text>

                <Button
                    title={'pop 出栈'}
                    onPress={() => {
                        navigation.pop();
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
