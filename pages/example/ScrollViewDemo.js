/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View, Button, StatusBar, RefreshControl
} from 'react-native';

const colors = ['#FF82AB', '#FF7256', '#BCD2EE', '#7CCD7C'];
export default class ScrollViewDemo extends Component {

    renderItem() {
        let views = [];
        colors.forEach((value, index) => {
            views.push(<Text style={[styles.item, {backgroundColor: value}]} key={index}>{value}</Text>)
        });
        return views;
    }

    _onMomentumScrollStart() {
        console.log('开始拖拽');
    }

    _onMomentumScrollEnd() {
        console.log('滚动结束');
    }

    _onScroll() {
        console.log('拖拽');
    }

    _onRefresh() {
        console.log('刷新');
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#FFD700'} //状态栏的背景色
                >
                </StatusBar>
                <ScrollView style={styles.container}
                            showsVerticalScrollIndicator={true}  /*是否显示右侧滑动指示条*/
                    /*onMomentumScrollStart={this._onMomentumScrollStart}*/ /*这个属性设置了没用*/
                            onMomentumScrollEnd={this._onMomentumScrollEnd} //滑动结束
                            onScroll={this._onScroll()}  /*这个也没有调用*/
                    /*horizontal={true}*/ /*水平滑动*/
                            refreshControl={
                                <RefreshControl
                                    refreshing={false}
                                    onRefresh={this._onRefresh}
                                    colors={['red', 'green', 'blue']}
                                    title={'正在刷新...'} /*ios属性*/
                                    tintColor={'red'}   /*ios属性*/
                                />
                            }


                >
                    {this.renderItem()}
                </ScrollView>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 280,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },

});
