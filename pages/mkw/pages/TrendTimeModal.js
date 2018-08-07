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
import PropTypes from 'prop-types';

export default class TrendTimeModal extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    static propTypes = {
        onClickModalItem: PropTypes.func,
        items: PropTypes.array,
    };

    getState() {
        return this.state.visible;
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

    onClickModalItem(item) {
        let onClick = this.props.onClickModalItem;
        if (this.props.onClickModalItem) {
            onClick(item);
            this.hide();
        }
    }

    renderItem() {
        let items = this.props.items;
        let viewArr = [];


        items.forEach((value, index, arr) => {
            viewArr.push(
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => this.onClickModalItem(value)}
                >
                    <View
                        style={{backgroundColor: 'white'}}
                    >
                        <Text style={styles.item}>{value.value}</Text>
                        {index !== arr.length - 1 ? <View style={styles.separator}/> : null}
                    </View>
                </TouchableOpacity>
            );

        });
        return viewArr;
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
                        {this.renderItem()}
                    </View>
                </TouchableOpacity>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0006',
        alignItems: 'center'

    },
    view_shadow: {
        width: '30%',
        backgroundColor: '#0009',
        marginTop: 50,
    },
    item: {
        fontSize: 16,
        paddingVertical: 8,
        alignSelf: 'center',
    },

    separator: {
        backgroundColor: '#8B8B7A',
        height: 0.3,

    }

});
