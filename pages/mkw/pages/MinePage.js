import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image, TouchableOpacity,
} from 'react-native';
import CustomKeyPage from "./CustomKeyPage";
import CustomTitle from "../view/CustomTitle";
import Constant from "../../tyzg/util/Constant";
import SortKeyPage from "./SortKeyPage";
import AboutPage from "./AboutPage";
import ViewRenderUtils from "../../tyzg/util/ViewRenderUtils";

const array = [
    {icon: require('../../../res/image/ic_custom_language.png'), txt: '自定义语言', flag: 'trend_language'},
    {icon: require('../../../res/image/ic_swap_vert.png'), txt: '语言排序', flag: 'trend_sort'},
    {icon: require('../../../res/image/ic_custom_language.png'), txt: '自定义标签', flag: 'popular_tag'},
    {icon: require('../../../res/image/ic_swap_vert.png'), txt: '标签排序', flag: 'popular_tag_sort'},
    {icon: require('../../../res/image/ic_view_quilt.png'), txt: '自定义主题', flag: 'custom_theme'},
];
export default class MinePage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    clickItem(flag) {
        let {navigate} = this.props.navigation;

        switch (flag) {
            // 趋势 自定义语言
            case array[0].flag:
                navigate('CustomKeyPage', {language: Constant.FLAG_LANGUAGE.TRENDING});
                break;
            // 趋势 语言排序
            case array[1].flag:
                navigate('SortKeyPage', {language: Constant.FLAG_LANGUAGE.TRENDING});
                break;
            // 最热 自定义标签
            case array[2].flag:
                navigate('CustomKeyPage', {language: Constant.FLAG_LANGUAGE.POPULAR});
                break;
            // 最热 标签排序
            case array[3].flag:
                navigate('SortKeyPage', {language: Constant.FLAG_LANGUAGE.POPULAR});
                break;
            // 自定义主题
            case array[4].flag:

                break;
        }
    }


    renderGroupTitle(txt) {
        return <Text style={styles.group_title}>{txt}</Text>
    }

    renderItem({icon, txt, flag}) {
        return (
            <TouchableOpacity activeOpacity={Constant.ACTIVE_OPACITY}
                              onPress={() => this.clickItem(flag)}
            >
                <View style={styles.item_small}>
                    <View style={styles.item_small_left}>
                        <Image source={icon}
                               style={[styles.item_icon, {tintColor: Constant.MAIN_COLOR}]}
                        />
                        <Text style={styles.item_title}>{txt}</Text>
                    </View>
                    <Image source={require('../../../res/image/ic_tiaozhuan.png')}
                           style={{tintColor: Constant.MAIN_COLOR}}
                    />
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <CustomTitle title={'我的'}
                             {...this.props}
                             showLeftView={false}/>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity activeOpacity={Constant.ACTIVE_OPACITY}
                                          onPress={() => {
                                              navigate('AboutPage');
                                          }}
                        >
                            <View style={styles.item}>
                                <View style={styles.item_left}>
                                    <Image source={require('../../../res/image/ic_trending.png')}
                                           style={[styles.big_icon, {tintColor: Constant.MAIN_COLOR}]}
                                    />
                                    <Text style={styles.big_title}>Github Popular</Text>
                                </View>
                                <Image source={require('../../../res/image/ic_tiaozhuan.png')}
                                       style={{tintColor: Constant.MAIN_COLOR}}
                                />
                            </View>
                        </TouchableOpacity>
                        {this.renderGroupTitle('趋势管理')}
                        {ViewRenderUtils.renderLine()}
                        {this.renderItem(array[0])}
                        {ViewRenderUtils.renderLine()}
                        {this.renderItem(array[1])}
                        {this.renderGroupTitle('最热管理')}
                        {this.renderItem(array[2])}
                        {ViewRenderUtils.renderLine()}
                        {this.renderItem(array[3])}
                        {ViewRenderUtils.renderLine()}
                        {this.renderGroupTitle('设置')}
                        {this.renderItem(array[4])}

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingVertical: 20,
    },
    big_icon: {
        height: 40,
        width: 40,
    },
    big_title: {
        marginLeft: 10,
    },
    item_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_small_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_small: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    item_icon: {
        height: 22,
        width: 22,
    },
    item_title: {
        marginLeft: 10,
    },
    group_title: {
        paddingLeft: 10,
        paddingVertical: 5,
        color: 'gray',
        backgroundColor: '#8C8C8C33',
    }
});
