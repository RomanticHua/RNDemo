import React, {Component} from 'react';
import {
    ActivityIndicator,
    Modal,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Constant from "./Constant";

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
                    this.hide();//这里必须设置,否则不能关闭
                }}
            >
                {/*这里必须使用TouchableOpacity 否则点击没有取消的效果 */}

                <TouchableOpacity style={styles.container}
                                  activeOpacity={1}
                                  onPressIn={() => {
                                      this.hide();
                                  }}
                >

                    <View style={styles.view_shadow}>
                        <ActivityIndicator
                            animating={true}
                            color={'red'}
                            size={'large'}
                        />
                    </View>
                </TouchableOpacity>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#0006'
    },
    view_shadow: {
        borderRadius: 10,
        backgroundColor: '#0009',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
