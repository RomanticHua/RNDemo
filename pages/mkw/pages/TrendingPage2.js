import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableOpacity,
    BackHandler
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../view/CustomTitle";
import LanguageDao from "../expand/dao/LanguageDao";
import TrendingTab from "./TrendingTab";
import TrendTimeModal from "./TrendTimeModal";
import Icon from 'react-native-vector-icons/FontAwesome';
import FirstPage from "../../example/pages/FirstPage";

export default class TrendingPage2 extends Component {

    constructor(props) {
        super(props);
        this.language = new LanguageDao(Constant.FLAG_LANGUAGE.TRENDING);
        this.state = {
            language: [],
            item: Constant.TRENDING_CATEGORY[0],
        };

        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
        this.loadData();
    }

    /**
     *
     * @returns true 表示事件被消费, false 表示事件没有消费,还会执行默认操作,返回到第一个tab页面
     */
    onBackButtonPressAndroid = () => {
        this.props.navigation.navigate('FirstPage');
        return true;
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }


    /**
     * 点击标题,弹出时间选择框
     */
    _onTitleClick() {
        this.trendTimeModal.show();
    }

    _onClickModalItem(item) {
        this.setState({
            item: item,
        });
    }

    renderTitleView() {
        return (
            <TouchableOpacity
                activeOpacity={Constant.ACTIVE_OPACITY}
                style={styles.view_title} onPress={() => this._onTitleClick()}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>{'趋势  ' + this.state.item.value}</Text>
                    <Icon name={'sort-down'} size={18} color={'white'} style={{marginLeft: 10}}/>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTitle
                    {...this.props}
                    showLeftView={false}
                    onTitleClick={() => this._onTitleClick()}
                    titleView={this.renderTitleView()}
                />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarBackgroundColor={Constant.MAIN_COLOR}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'mintcream'}
                    tabBarUnderlineStyle={styles.tab_bar_underline}

                >
                    {
                        this.state.language.map((value, index) => {
                            if (value.checked) {
                                return (
                                    <TrendingTab key={index}
                                                 type={this.state.item.key}
                                                 tabLabel={value.name}
                                                 {...this.props}>{value.name}</TrendingTab>
                                );
                            } else {
                                return null
                            }

                        })
                    }
                </ScrollableTabView>
                <TrendTimeModal
                    ref={trendTimeModal => this.trendTimeModal = trendTimeModal}
                    onClickModalItem={(key) => this._onClickModalItem(key)}
                    items={Constant.TRENDING_CATEGORY}
                />
            </View>
        );
    }

    loadData() {
        this.language.fetch()
            .then(result => {
                this.setState({
                    language: result,
                });

            })
            .catch(err => {
                console.log(err);
            })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab_bar_underline: {
        backgroundColor: '#e7e7e7',
        height: 2,
    },
    view_title: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',

    },

});
