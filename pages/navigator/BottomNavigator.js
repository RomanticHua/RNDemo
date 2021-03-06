import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import {createBottomTabNavigator} from "react-navigation";
import PopularPage from "../mkw/pages/PopularPage";
import Trending from "../mkw/pages/Trending";
import Favorite from "../mkw/pages/Favorite";
import My from "../mkw/pages/My";

import Icon from 'react-native-vector-icons/FontAwesome';
import TrendingPage from "../mkw/pages/TrendingPage";
import TrendingPage2 from "../mkw/pages/TrendingPage2";
import MinePage from "../mkw/pages/MinePage";
import Constant from "../tyzg/util/Constant";
import TabBarComponent from "./TabBarComponent";

const ICON_SIZE = 20;
export default BottomNavigator = createBottomTabNavigator(
    {
        PopularPage: {
            screen: PopularPage,
            navigationOptions: {
                // tabBarIcon: ({tintColor}) => <Icon name={'rocket'} size={ICON_SIZE} color={tintColor}/>,
                // tabBarLabel: '热门',

                //在这里可以很轻易的自定义Label的样式
                tabBarLabel: ({focused, tintColor}) => <View
                    style={{flex: 1, backgroundColor: '#0f04'}}
                >
                    <Text style={{backgroundColor: '#f003', textAlign: 'center', textAlignVertical: 'center'}}>热门</Text>
                    <View style={{backgroundColor: 'black', height: 5, width: '80%'}}/>
                </View>,
            }
        },
        TrendingPage: {
            screen: TrendingPage2,
            navigationOptions: {
                // tabBarIcon: ({tintColor}) => <Icon name={'address-book'} size={ICON_SIZE} color={tintColor}/>,
                tabBarIcon: null,
                tabBarLabel: '趋势',
            }
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                // tabBarIcon: ({tintColor}) => <Icon name={'plus-square'} size={ICON_SIZE} color={tintColor}/>,
                tabBarIcon: null,
                tabBarLabel: '喜欢',
            },

        },
        MyPage: {
            screen: MinePage,
            navigationOptions: {
                // tabBarIcon: ({tintColor}) => <Icon name={'apple'} size={ICON_SIZE} color={tintColor}/>,
                tabBarIcon: null,
                tabBarLabel: 'Mine',
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    console.log('MyPage被点击');
                    /*
                     *  这里可以处理一些自定义逻辑
                     */
                    defaultHandler();//默认的处理程序,如果不调用,将不能切换
                }
            }
        },

    },

    {
        //todo 如何自定义tabBarComponent
        /* tabBarComponent: props =>
             <TabBarComponent
                 {...props}
             />,*/
        tabBarOptions: {
            activeTintColor: Constant.MAIN_COLOR,
            inactiveTintColor: 'gray',
            //标签栏样式
            style: {
                backgroundColor: 'white',//整个标签栏背景颜色
                height: 55,//整个标签栏高度
                borderTopColor: Constant.MAIN_COLOR,//设置顶部的分割线
                borderTopWidth: 0.5,
            },
            //标签栏文字样式
            labelStyle: {
                fontSize: 13,//设置文本大小
                marginBottom: 3,//距离底部距离
            },
            showIcon: false,//不显示图标
        },
        /**
         *  android点击返回时按键处理
         *  initialRoute 初始界面 默认值
         *  none         关闭全部tab,返回上个界面
         */
        backBehavior: 'none',
    }
)
;
