import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import Popular from "../mkw/pages/Popular";
import Trending from "../mkw/pages/Trending";
import Favorite from "../mkw/pages/Favorite";
import My from "../mkw/pages/My";

import Icon from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 20;
export default BottomNavigator = createBottomTabNavigator(
    {
        Popular: {
            screen: Popular,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'rocket'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '热门',
            }
        },
        Trending: {
            screen: Trending,
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
        My: {
            screen: My,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name={'apple'} size={ICON_SIZE} color={tintColor}/>,
                tabBarLabel: '我的',
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff',
            },


        }
    }
)
;
