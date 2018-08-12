/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text, TouchableOpacity,
    View,
    Linking, FlatList, LayoutAnimation,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Constant from "../../tyzg/util/Constant";
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewRenderUtils from "../../tyzg/util/ViewRenderUtils";

const window = Dimensions.get('window');
const AVATAR_SIZE = 120;//图片尺寸
const PARALLAX_HEADER_HEIGHT = 300;//视差高度
const STICKY_HEADER_HEIGHT = Constant.TITLE_HEIGHT;//固定头部高度
const HEADER_PIC = 'http://www.devio.org/io/GitHubPopular/img/for_githubpopular_about_me.jpg';
const FOREGROUND_PIC = 'https://avatars2.githubusercontent.com/u/8716595?v=4&s=460';
const FOREGROUND_TXT = '专注于移动开发，分享知识，共享快乐。';

const array = [

    {
        icon: require('../../../res/image/ic_computer.png'), txt: 'Website', flag: 'website', subItems: [
            {txt: 'A'},
            {txt: 'B'},
            {txt: 'C'},
        ]
    },
    {
        icon: require('../../../res/image/ic_insert_emoticon.png'), txt: '关于作者', flag: 'about_author', subItems: [
            {txt: 'DD'},
            {txt: 'EE'},
            {txt: 'FF'},
        ]

    },
    {
        icon: require('../../../res/image/ic_feedback.png'), txt: '反馈', flag: 'feedback', subItems: [
            {txt: 'GGGG'},
            {txt: 'HHHH'},
            {txt: 'IIII'},
        ]
    },
];

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: -1,
        }
    }

    clickItem(flag) {
        let {navigate} = this.props.navigation;
        switch (flag) {
            // Website
            case array[0].flag:
                navigate('CustomKeyPage', {language: Constant.FLAG_LANGUAGE.TRENDING});
                break;
            // 关于作者
            case array[1].flag:
                navigate('SortKeyPage', {language: Constant.FLAG_LANGUAGE.TRENDING});
                break;
            // 反馈
            case array[2].flag:
                let url = 'tel:18627726763';
                Linking.canOpenURL(url).then(value => value && Linking.openURL(url));
                break;
        }
    }

    /**
     * 点击标题栏
     */
    _onClickTitle(index) {
        let selectedIndex = this.state.selectedIndex === index ? -1 : index;
        LayoutAnimation.easeInEaseOut();
        this.setState({
            selectedIndex: selectedIndex,
        });
    }

    renderTitle({icon, txt}, index) {
        let img = this.state.selectedIndex === index ? require('../../../res/image/ic_tiaozhuan_down.png') : require('../../../res/image/ic_tiaozhuan.png')
        return (
            <TouchableOpacity activeOpacity={Constant.ACTIVE_OPACITY}
                              onPress={() => this._onClickTitle(index)}
            >
                <View style={styles.item_small}>
                    <View style={styles.item_small_left}>
                        <Image source={icon}
                               style={[styles.item_icon, {tintColor: Constant.MAIN_COLOR}]}
                        />
                        <Text style={styles.item_title}>{txt}</Text>
                    </View>
                    <Image source={img}
                           style={{tintColor: Constant.MAIN_COLOR}}
                    />
                </View>
            </TouchableOpacity>
        );
    }


    //布局中使用代码只能用三目运算符,if else 不能使用.
    _renderItem(item, index) {
        console.log(item);
        return (

            <View>
                {this.renderTitle(item, index)}
                {this.state.selectedIndex === index ? item.subItems.map((item, index) => {
                    return (
                        <Text key={index}
                              style={{backgroundColor: '#f003', height: 30,}}>{item.txt}</Text>
                    )
                }) : null}
            </View>


        );
    }

    /**
     * 返回函数
     */
    onBackPress() {
        //默认执行关闭页面操作
        let navigation = this.props.navigation;
        navigation && navigation.goBack();
    }

    /**
     * 创建后背景
     */
    _renderBackground(url) {
        return (
            <View key="background">
                <Image source={{
                    uri: url,
                    width: window.width,
                    resizeMode: 'contain',
                    height: PARALLAX_HEADER_HEIGHT
                }}/>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,.4)',
                    height: PARALLAX_HEADER_HEIGHT,
                }}/>
            </View>
        );
    }

    /**
     * 创建前背景
     */
    _renderForeground(url, txt) {
        return (
            <View key="parallax-header" style={styles.parallaxHeader}>
                <Image style={styles.avatar} source={{
                    uri: url,
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE
                }}/>
                <Text style={styles.sectionSpeakerText}>
                    {txt}
                </Text>

            </View>
        );
    }

    /**
     * 创建粘性头布局
     */
    _renderStickyHeader(txt) {
        return (
            <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{txt}</Text>
            </View>
        );
    }

    /**
     * 创建固定的头布局
     */
    _renderFixedHeader() {
        return (
            <View key="fixed-header" style={styles.back}>
                <TouchableOpacity
                    activeOpacity={Constant.ACTIVE_OPACITY}
                    onPress={() => this.onBackPress()}
                    style={styles.touchable_back}
                >
                    <Icon name={'angle-left'} size={25} color={'white'}/>
                </TouchableOpacity>
            </View>
        );
    }


    _keyExtractor(item, index) {
        return index + '';
    }

    render() {
        return (
            <ParallaxScrollView
                stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT - 40}
                backgroundSpeed={10}
                renderBackground={() => this._renderBackground(HEADER_PIC)}
                renderForeground={() => this._renderForeground(FOREGROUND_PIC, FOREGROUND_TXT)}
                renderStickyHeader={() => this._renderStickyHeader('Github')}
                renderFixedHeader={() => this._renderFixedHeader()}>
                <FlatList
                    renderItem={({item, index}) => this._renderItem(item, index)}
                    data={array}
                    keyExtractor={(item, index) => this._keyExtractor(item, index)}
                    extraData={this.state.selectedIndex}//指定此属性,表示当state变化是触发FlatList刷新
                />


            </ParallaxScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    back: {
        width: Constant.ICON_WIDTH,
        height: STICKY_HEADER_HEIGHT,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },
    touchable_back: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickySectionText: {
        color: 'white',
        fontSize: 18,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        height: PARALLAX_HEADER_HEIGHT,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 18,
        marginTop: 15
    },
    item_small_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_small: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    item_icon: {
        height: 22,
        width: 22,
    },
    item_title: {
        marginLeft: 10,
    },

});

