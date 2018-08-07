import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert, TouchableOpacity,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import DataRepository from "../expand/dao/DataRepository";
import LoadingModal from "../../tyzg/util/LoadingModal";
import PopularCell from "../view/PopularCell";
import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../view/CustomTitle";
import FirstPage from "../../example/pages/FirstPage";
import PopularTab from "./PopularTab";
import LanguageDao from "../expand/dao/LanguageDao";
import TrendingTab from "./TrendingTab";
import TrendTimeModal from "./TrendTimeModal";
import Icon from 'react-native-vector-icons/FontAwesome';
import TimeSpan from "../model/TimeSpan";
import {Popover} from "../view/Popover";


const timeSpanArray=[
    new TimeSpan('今天','daily'),
    new TimeSpan('本周','weekly'),
    new TimeSpan('本月','monthly')
];
export default class TrendingPage extends Component {

    constructor(props) {
        super(props);
        this.language = new LanguageDao(Constant.FLAG_LANGUAGE.TRENDING);
        this.state = {
            language: [],
            item: Constant.TRENDING_CATEGORY[0],
            isVisible: false,
            buttonRect: {}
        };
        this.tabArray = [];
    }

    componentDidMount() {
        this.loadData();
    }

    /**
     * 点击标题,弹出时间选择框
     */
    _onTitleClick() {


    }

    renderTitleView() {
        return (
            <TouchableOpacity
                activeOpacity={Constant.ACTIVE_OPACITY}
                style={styles.view_title} onPress={() => this._onTitleClick()}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>{'趋势'}</Text>
                    <Icon name={'sort-down'} size={18} color={'white'} style={{marginLeft: 10}}/>
                </View>
            </TouchableOpacity>

        );
    }

    //这样创建节点会有问题,第一次tab不会走加载方法
    renderItem() {
        this.state.language.forEach((value, index) => {
            if (value.checked) {
                this.tabArray.push(
                    <TrendingTab key={index}
                                 tabLabel={value.name}
                                 {...this.props}>{value.name}</TrendingTab>
                );
            }

        });
        return this.tabArray;
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
                    initialPage={0}
                    page={0}
                >
                    {/*{
                        this.renderItem()
                    }*/}

                    {
                        this.state.language.map((value, index) => {
                            if (value.checked) {
                               return(
                                    <TrendingTab key={index}
                                                 tabLabel={value.name}
                                                 {...this.props}>{value.name}</TrendingTab>
                                );
                            }else{
                                return null
                            }

                        })
                    }

                </ScrollableTabView>
                <Popover
                    isVisible={this.state.isVisible}
                    fromRect={this.state.buttonRect}
                    onClose={this.closePopover}>
                    <Text>I'm the content of this popover!</Text>
                </Popover>
            </View>
        );
    }

    /**
     * 显示popover
     */
    showPopover() {
        this.refs.button.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: {x: px, y: py, width: width, height: height}
            });
        });
    }

    /**
     * 关闭popover
     */
    closePopover() {
        this.setState({isVisible: false});
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
