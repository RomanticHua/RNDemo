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

const MAX_TITLE_LENGTH = 20;
export default class CustomTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static  defaultProps = {
        title: '',
        customBackgroundColor: Constant.MAIN_COLOR,
        showLeftView: true,
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        customBackgroundColor: PropTypes.string,
        rightView: PropTypes.element,
        showLeftView: PropTypes.bool,
        leftView: PropTypes.element,
        onBackClick: PropTypes.func,
        titleView: PropTypes.element,
    };

    /**
     * 返回函数
     */
    onBackPress() {
        //是否有自定义返回函数,有的话,只执行自定义
        let onBackClick = this.props.onBackClick;
        if (onBackClick) {
            onBackClick();
            return;
        }
        //默认执行关闭页面操作
        let navigation = this.props.navigation;
        navigation && navigation.goBack();
    }

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
                activeOpacity={Constant.ACTIVE_OPACITY}
                onPress={() => this.onBackPress()}
                style={styles.touchable_back}
            >
                <Icon name={'angle-left'} size={25} color={'white'}/>
            </TouchableOpacity>

        );
    }

    /**
     * 构建默认的标题栏布局
     * @returns {*}
     */
    renderDefaultTitleView() {
        let titleView = this.props.titleView;
        if (titleView) {
            return titleView;
        }
        //获取标题,如果标题太长,截取部分显示
        let title = this.props.title;
        if (title.length > MAX_TITLE_LENGTH) {
            title = title.substr(0, MAX_TITLE_LENGTH);
            title += '...';
        }
        return (
            <Text style={styles.title}
            >{title}</Text>
        );
    }

    render() {


        return (
            <View>
                <StatusBar
                    // animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={Constant.MAIN_COLOR} //状态栏的背景色
                    //translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    //barStyle={'default'} // enum('default', 'light-content', 'dark-content')//状态栏字体颜色
                >
                </StatusBar>

                <View style={[styles.container, {backgroundColor: this.props.customBackgroundColor}]}>
                    <View style={styles.back}>
                        {this.renderDefaultLeftView()}
                    </View>
                    {this.renderDefaultTitleView()}
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
        height: Constant.TITLE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    back: {
        width: Constant.ICON_WIDTH,
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

    },
    right_view: {
        right: 5,
        top: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
