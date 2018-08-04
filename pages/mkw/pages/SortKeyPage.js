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

import SortableListView from 'react-native-sortable-listview'
import SortCell from "./SortCell";
import ArrayUtils from "../util/ArrayUtils";

export default class SortKeyPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            checkedArray:[],//已订阅的标签数组
        };
        this.languageDao = new LanguageDao(Constant.KEY.LANGUAGE);
        this.dataArray=[];//数据库中所有标签数组
        this.sortResultArray=[];//排序之后新生产的数组,最终的排序结果
        this.originalCheckedArray=[];//保存初始已订阅标签数组,用来判断标签顺序是否发生改变.
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
                    onBackClick={()=>this._onBackClick()} //这里是绑定函数,传递函数过去
                    rightView={this.renderRightView()} //这里只是得到函数返回的结果
                />
                <SortableListView
                    style={{ flex: 1 }}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0]);
                        this.forceUpdate()//强制刷新
                    }}
                    renderRow={row => <SortCell data={row} />}
                />
            </View>

        );
    }

    _onBackClick(){
        if (ArrayUtils.isEqual(this.originalCheckedArray,this.state.checkedArray)) {
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
                        this.saveAndPop();
                    }
                }

            ])
        }
    }
    onSave(){
        if(ArrayUtils.isEqual(this.originalCheckedArray,this.state.checkedArray)){
            this.props.navigation.pop();
            return ;
        }
       this.saveAndPop();
    }

    /**
     * 保存并退出
     */
    saveAndPop(){
        this.getSortResult();
        this.languageDao.save(this.sortResultArray);
        this.props.navigation.pop();
    }

    /**
     * 得到最终的结果
     */
    getSortResult(){
        this.sortResultArray=this.dataArray.slice(0);
        for (let i = 0; i < this.originalCheckedArray.length; i++) {
            let item =this.originalCheckedArray[i];
            let index=this.dataArray.indexOf(item);
            this.sortResultArray.splice(index,1,this.state.checkedArray[i]);
        }
    }
    renderRightView(){
        return <Text style={styles.right_view}
                     onPress={() => this.onSave()}>保存</Text>
    }


    /**
     * 加载language数据
     */
    loadData() {
        this.languageDao.fetch()
            .then(result => {
               this.getCheckedItems(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    /**
     * 初始化数据
     */
    getCheckedItems(result){
        this.dataArray=result;
        let checkedArray=result.filter(value=>value.checked);//得到已订阅的数组
        this.setState({
            checkedArray:checkedArray,
        });
        this.originalCheckedArray=checkedArray.slice(0);//复制数组

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
});
