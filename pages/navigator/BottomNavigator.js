import React, {Component} from 'react';
import {Alert} from 'react-native';
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

const ICON_SIZE = 20;
export default BottomNavigator = createBottomTabNavigator(
    {
        PopularPage: {
            screen: PopularPage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'rocket'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '热门',
            }
        },
        TrendingPage: {
            screen: TrendingPage2,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'address-book'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '趋势',
            }
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'plus-square'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '喜欢',
            }
        },
        MyPage: {
            screen: MinePage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'apple'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '我的',
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: Constant.MAIN_COLOR,
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff',
            },


        }
    }
)
;
