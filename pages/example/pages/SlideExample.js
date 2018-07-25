import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Slider,
    Alert,
    Switch,
} from 'react-native';

export default class SlideExample extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            value: 50,
            switchValue: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.value}
                </Text>
                <Slider
                    value={this.state.value}//默认值
                    maximumValue={100}//最大值
                    minimumTrackTintColor={'red'}//滑块左侧颜色
                    maximumTrackTintColor={'blue'}//滑块右侧颜色
                    onSlidingComplete={value => {//手指脱离滑块回调
                        Alert.alert(value + "");
                    }}
                    step={5}//步长
                    onValueChange={value => this.setState({value: value})}//值改变时调用
                />
                <View style={styles.view_switch}>
                    <Text style={styles.switch_txt}
                          onPress={() => this.setState({switchValue: !this.state.switchValue})}
                    >{this.state.switchValue ? '打开' : '关闭'}</Text>
                    <Switch
                        style={{marginLeft: 20}}
                        disabled={false}
                        value={this.state.switchValue}
                        onValueChange={value => this.setState({switchValue: value})}
                        onTintColor={'red'}
                        tintColor={'green'}
                        thumbTintColor={'blue'}
                    />
                </View>
                <View style={{backgroundColor: '#0f0', flexDirection: 'row'}}>
                    <Text style={{backgroundColor: '#FFA07A', height: 90, width: 50}}>1</Text>
                    <Text style={{backgroundColor: '#FF7F00', height: 150}}>2</Text>
                    <Text style={{backgroundColor: '#D1EEEE'}}>3</Text>
                    <Text style={{backgroundColor: '#B3EE3A'}}>4</Text>
                    <Text style={{backgroundColor: '#8B8970'}}>5</Text>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'red',
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 20,
    },
    switch_txt: {
        color: 'red',
        fontSize: 18,
        alignSelf: 'center',
    },
    view_switch: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#f003'
    }

});
