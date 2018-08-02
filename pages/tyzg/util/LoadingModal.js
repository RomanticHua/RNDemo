/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    Modal,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LoadingModal extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    show() {
        this.setState({
            visible: true,
        })
    }

    hide() {
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => {
                }}
            >
                <View style={styles.container}
                      onPress={() => {/*点击加载圈,隐藏加载对话圈*/
                          this.hide();
                          console.log('关闭加载圈');
                      }}
                >
                    <View style={styles.view_shadow}>
                        <ActivityIndicator
                            animating={true}
                            color={'red'}
                            size={'large'}
                        />
                    </View>
                </View>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    view_shadow: {
        borderRadius: 10,
        backgroundColor: '#0006',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
