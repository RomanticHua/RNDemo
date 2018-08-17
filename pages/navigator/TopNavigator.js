import React, {Component} from 'react';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from "react-navigation";
import PopularPage from "../mkw/pages/PopularPage";
import Favorite from "../mkw/pages/Favorite";

import TrendingPage2 from "../mkw/pages/TrendingPage2";
import MinePage from "../mkw/pages/MinePage";
import Constant from "../tyzg/util/Constant";
import {Text, View} from "react-native";

export default TopNavigator = createMaterialTopTabNavigator(
    {
        PopularPage: {
            screen: PopularPage,
            navigationOptions: {
                // tabBarLabel: '热门',
                tabBarLabel: ({focused}) => <View
                >
                    <Text style={{backgroundColor: '#f003', textAlign: 'center', textAlignVertical: 'center'}}>热门</Text>
                    <View style={{backgroundColor: 'black', height: 5, width: '80%'}}/>
                </View>,
            }
        },
        TrendingPage: {
            screen: TrendingPage2,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => <Text style={{
                    fontSize: focused ? 18 : 12,
                    color: focused ? 'red' : 'blue'
                }}>趋势</Text>,
            }
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                tabBarLabel: '喜欢',
            },

        },
        MyPage: {
            screen: MinePage,
            navigationOptions: {
                tabBarLabel: 'Mine',
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    console.log(navigation);
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
        tabBarOptions: {
            activeTintColor: Constant.MAIN_COLOR,
            inactiveTintColor: 'gray',
            upperCaseLabel: false,//标签不全部大写
            showIcon: false,//默认为false,是不显示图片的

            // pressColor: 'red',//material 按下去的颜色
            indicatorStyle: { //选项卡指示器样式
                height: 5,
                backgroundColor: 'red'
            },
            //标签栏样式
            style: {
                backgroundColor: 'white',//整个标签栏背景颜色
                height: 55,//整个标签栏高度
            },
            //标签栏文字样式
            labelStyle: {
                fontSize: 18,//设置文本大小
                textAlign:'center',
                textAlignVertical:'center',
                backgroundColor:'#f003'
            },
            //当tab页面很多的时候设置这个.
            // scrollEnabled: true,// 是否可以滑动选项卡
            // tabStyle: { //设置tab选项卡的宽度,如果tab是固定的,这个不需要设置
            //     width: 150,
            // },

            tabStyle: {
                flex: 1,
                alignItems: 'stretch'
            },

        },
        swipeEnabled: false,//是否允许在标签之间滑动
        backBehavior: 'none',//按返回键直接返回上个界面.
    }
)
;
