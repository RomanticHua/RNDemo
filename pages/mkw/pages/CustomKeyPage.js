import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert, Image
} from 'react-native';
import CustomTitle from "../view/CustomTitle";
import LanguageDao from "../expand/dao/LanguageDao";
import Constant from "../../tyzg/util/Constant";
import CheckBox from "react-native-check-box";

import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomKeyPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            languageArray: [],
        };
        this.languageDao = new LanguageDao(this.props.navigation.getParam('language'));
        this.changeValueSet = new Set();
    }

    /**
     * 页面渲染完毕时加载
     */
    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTitle
                    {...this.props}
                    title={'自定义标签页'}
                    rightView={this.renderTitleRightView()}
                    onBackClick={() => this._onBackClick()}/>
                {this.renderItem()}
            </View>

        );
    }

    /**
     * 创建标题右侧的view
     */
    renderTitleRightView() {
        return <Text style={styles.right_view}
                     onPress={() => this.onSave()}>保存</Text>
    }

    /**
     * 保存
     */
    onSave() {
        if (this.changeValueSet.size === 0) {
            this.props.navigation.pop();
        } else {
            this.languageDao.save(this.state.languageArray);
            this.props.navigation.pop();
        }
    }

    /**
     * 返回按钮点击
     */
    _onBackClick() {
        if (this.changeValueSet.size === 0) {
            this.props.navigation.pop();
        } else {
            Alert.alert('提示', '是否保存修改', [
                {
                    text: '取消',
                    onPress: () => {
                        this.props.navigation.pop();
                    }
                },
                {
                    text: '确定',
                    onPress: () => {
                        this.languageDao.save(this.state.languageArray);
                        this.props.navigation.pop();
                    }
                }

            ])
        }
    }

    /**
     * 加载language数据
     */
    loadData() {
        this.languageDao.fetch()
            .then(result => {
                this.setState({
                    languageArray: result,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


    /**
     * checkbox点击事件
     */
    onClick(data) {
        if (!data) {
            return;
        }
        data.checked = !data.checked;
        //用一个set来存储改变的数据,因为点击两次就是复原,如果有的话,代表点击过一次,直接删除这个元素
        //如果之前没有点击过,那么set中没有这个数据,因此这个条目改变了.
        if (this.changeValueSet.has(data)) {
            this.changeValueSet.delete(data);
        } else {
            this.changeValueSet.add(data);
        }
    }

    renderCheckBox(data) {
        if(!data){
            return;
        }
        let leftText = data.name;
        return (
            <CheckBox
                onClick={() => this.onClick(data)}
                leftText={leftText}
                style={styles.check_box}
                isChecked={data.checked}
                checkedImage={<Image style={{tintColor: Constant.MAIN_COLOR}}
                                     source={require('../../../res/image/ic_check_box.png')}/>}
                unCheckedImage={<Image style={{tintColor: Constant.MAIN_COLOR}}
                                       source={require('../../../res/image/ic_check_box_outline_blank.png')}/>}
            />
        );
    }

    /**
     * 遍历数组,创建元素
     */
    renderItem() {
        let languageArray = this.state.languageArray;
        console.log(languageArray);
        if (!languageArray || languageArray.length === 0) {
            return;
        }
        console.log(languageArray);
        let views = [];
        for (let i = 0; i < languageArray.length - 1; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(languageArray[i])}
                        {this.renderCheckBox(languageArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            );
        }
        //如果是单数,还得添加最后一个元素
        if (languageArray.length % 2 !== 0) {
            let last = languageArray.length - 1;
            views.push(
                <View key={last}>
                    <View style={styles.item}>
                        {this.renderCheckBox(languageArray[last])}
                    </View>
                    <View style={styles.line}/>
                </View>
            );
        }
        return views;
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    right_view: {
        color: 'white',
        fontSize: 16,
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        backgroundColor: '#8B8B7A',
        height: 0.5,
    },
    check_box: {
        width: '50%',
        padding: 10,
    },

});
