import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
} from 'react-native';
import WebViewPage from "./WebViewPage";
import TrendingDataRepository from "../expand/dao/TrendingDataRepository";
import TrendingCell from "../view/TrendingCell";

export default class TrendingTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
        };
        this.dataRepository = new TrendingDataRepository();
    }

    /**
     * 组件加载完成之后加载数据
     */
    componentDidMount() {
        this.loadData();
    }

    /**
     * 上个界面通过state来传递props,在这里判断,如果上次的type和本次即将更新的type不同则更新
     * @param nextProps 即将更新的props this.props是旧的props
     */
    componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
            this.loadData(nextProps.type);
        }

    }

    getUrl(language, type) {
        return 'https://github.com/trending/' + language + '?since=' + type;
    }

    /**
     * 加载数据
     * @param type 默认值为 this.props.type
     */
    loadData(type = this.props.type) {
        let url = this.getUrl(this.props.tabLabel, type);
        this.setState({
            refreshing: true,
        });
        this.dataRepository.fetchRepository(url)
            .then(result => {
                this.setState({
                    data: result,
                });
            })
            .catch(error => {
                Alert.alert(JSON.stringify(error));
            })
            .finally(() => {
                this.setState({
                    refreshing: false,
                });
            })
    }

    /**
     * 点击条目,跳转到webView界面
     * @param item
     */
    onItemClick(item) {
        let url = 'https://github.com/' + item.fullName;
        this.props.navigation.navigate('WebViewPage', {title: item.fullName, url: url})
    }


    _renderItem({item}) {
        return <TrendingCell item={item} onItemClick={() => this.onItemClick(item)}/>
    }

    _keyExtractor(item, index) {
        return index + '';
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    renderItem={info => this._renderItem(info)}
                    data={this.state.data}
                    keyExtractor={(item, index) => this._keyExtractor(item, index)}
                    onRefresh={() => this.loadData()}
                    refreshing={this.state.refreshing}
                />

            </View>
        );


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});




