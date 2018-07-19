/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    RefreshControl,
    Alert,
    ToastAndroid,
} from 'react-native';


const sections = [
    {data: ['A', 'B', 'C'], title1: '初级'}, //data 这个key不能修改,title1 可以任意指定
    {data: ['D', 'E', 'F'], title1: '中级'},
    {data: ['G', 'H', 'I'], title1: '高级'},
    {data: ['J', 'K', 'L'], title1: '终极'}
];
export default class SectionListExample extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            refreshState: false,
        }
    }

    _renderItem({item}) {
        return <Text style={styles.item}>{item}</Text>
    }

    _renderItemSeparator() {
        return <View style={styles.itemSeparator}/>
    }

    _renderListHeader() {
        return <Text style={styles.header}>头部</Text>
    }

    _renderListFooter() {
        return <Text style={styles.header}>尾部</Text>
    }

    _renderSectionHeader({section}) {
        return <Text style={styles.SectionHeader}>{section.title1}</Text>
    }

    _extraUniqueKey(item, index) {
        return index + item;
    }

    _renderSectionSeparator() {
        return <View style={styles.sectionSeparator}/>
    }

    _onRefresh() {
        this.setState({
            refreshState: true,
        });

        setTimeout(() => {

            Alert.alert('标题', '刷新完成',
                [
                    {
                        text: '取消',
                        onPress: () => {
                            ToastAndroid.show('取消', ToastAndroid.SHORT)
                        }
                    },
                    {
                        text: '确定',
                        onPress: () => {
                            ToastAndroid.show('确定', ToastAndroid.SHORT)
                        }
                    },
                ]
            );

            this.setState({
                refreshState: false,
            });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={sections} /*数据源*/
                    renderItem={this._renderItem} /*创建item*/
                    renderSectionHeader={this._renderSectionHeader} /*创建头*/
                    ItemSeparatorComponent={this._renderItemSeparator} /*分割线*/
                    ListHeaderComponent={this._renderListHeader} /*头布局*/
                    ListFooterComponent={this._renderListFooter} /*尾布局*/
                    keyExtractor={this._extraUniqueKey} /*这个方法必须要调用,否则会出现警告*/
                    stickySectionHeadersEnabled={true}  /*是否是粘性头*/
                    SectionSeparatorComponent={this._renderSectionSeparator} /*区分section和header*/

                    /*如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，
                    以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。*/
                    /*上面是官网说明,但是不能自定refreshControl的相关属性,例如颜色*/
                    onRefresh={() => this._onRefresh()}

                    refreshing={this.state.refreshState}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 70,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#C0FF3E',
        color: 'white',
    },
    itemSeparator: {
        backgroundColor: 'red',
        height: 1,
    },
    sectionSeparator: {
        backgroundColor: 'green',
        height: 10,
    },
    header: {
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#FF3E96',
        color: 'white',
    },
    SectionHeader: {
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#CD7054',
        color: 'white',
    }

});
