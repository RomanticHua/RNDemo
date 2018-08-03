import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, StatusBar
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constant from "../../tyzg/util/Constant";

export default class CustomTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static  defaultProps = {
        title: '',
        customBackgroundColor: 'blue',
        showLeftView: true,
        onBackPress: () => {
        },
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        customBackgroundColor: PropTypes.string,
        onBackPress: PropTypes.func,
        rightView: PropTypes.element,
        showLeftView: PropTypes.bool,
        leftView: PropTypes.element,
    };

    /**
     * 左侧视图构建
     */
    renderDefaultLeftView() {
        let showLeftView = this.props.showLeftView;
        let leftView = this.props.leftView;
        //如果设置了左侧的view,则展示左侧的view.
        if (leftView) {
            return leftView;
        }
        //判断是否隐藏
        if (!showLeftView) {
            return null;
        }
        //返回默认的左侧布局,一个返回按钮
        return (
            <TouchableOpacity
                activeOpacity={Constant.activeOpacity}
                onPress={() => this.props.onBackPress()}
                style={styles.touchable_back}
            >
                <Icon name={'angle-left'} size={22} color={'#6B6B6B'}/>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View>
                <StatusBar
                    // animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={Constant.mainColor} //状态栏的背景色
                    //translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    //barStyle={'default'} // enum('default', 'light-content', 'dark-content')//状态栏字体颜色
                >
                </StatusBar>

                <View style={[styles.container, {backgroundColor: this.props.customBackgroundColor}]}>
                    <View style={styles.back}>
                        {this.renderDefaultLeftView()}
                    </View>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.right_view}>
                        {this.props.rightView}
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
    },
    back: {
        width: 40,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',

    },
    touchable_back: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        position: 'absolute',
    },
    right_view: {
        right: 5,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },

});
