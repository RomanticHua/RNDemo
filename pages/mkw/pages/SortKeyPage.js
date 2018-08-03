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

export default class SortKeyPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            checkedArray:[],//已订阅的标签数组
        };
        this.languageDao = new LanguageDao(Constant.KEY.LANGUAGE);
        this.dataArray=[];//数据库中所有标签数组
        this.sortResultArray=[];//排序之后新生产的数组
        this.originalCheckedArray=[];//上一次排序的顺序
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
                  />
                <SortableListView
                    style={{ flex: 1 }}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        order.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                        this.forceUpdate()
                    }}
                    renderRow={row => <SortCell data={row} />}
                />
            </View>

        );
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

    getCheckedItems(result){
        this.dataArray=result;
        let checkedArray=result.filter(value=>value.checked);
        this.setState({
            checkedArray:checkedArray,
        })
        this.originalCheckedArray=checkedArray.slice(0);
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
