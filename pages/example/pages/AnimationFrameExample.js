import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
} from 'react-native';

export default class AnimationFrameExample extends Component {
    constructor(props) {
        super(props);
        //利用state不断改变视图的样式
        this.state = {
            width: 100,
            height: 100,
        }
    }

    updateState() {
        // setTimeout(() => {
        this.setState({
            width: this.state.width + 2,
            height: this.state.height + 2,
        })
        // }, 10);
    }

    startAnimation() {
        let count = 0;
        this.setState({
            width: 100,
            height: 100,
        });
        while (count++ < 100) {
            requestAnimationFrame(() => this.updateState());
        }
    }

    startAnimation2() {
        let count = 0;
        while (++count < 100) {
            requestAnimationFrame(() => {
                this.view.setNativeProps({
                    style: {
                        width: this.state.width++,
                        height: this.state.height++
                    }
                })
            });
        }
    }

    startAnimation3() {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                700,
                LayoutAnimation.Types.spring,
                LayoutAnimation.Properties.scaleXY));
        this.setState({
            width: this.state.width + 10,
            height: this.state.height +10,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'点我吧,帅哥'}
                    onPress={() => this.startAnimation()}
                />
                <Button
                    title={'nativeProps'}
                    onPress={() => this.startAnimation2()}
                />
                <Button
                    title={'LayoutAnimation'}
                    onPress={() => this.startAnimation3()}
                />

              {/*  <View
                    ref={view => this.view = view}
                    style={{width: 100, height: 100, backgroundColor: '#f00'}}/>

                <View style={{width: this.state.width, height: this.state.height, backgroundColor: '#0f0'}}/>*/}
                <View style={{width: this.state.width, height: this.state.height, backgroundColor: '#0f0'}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
