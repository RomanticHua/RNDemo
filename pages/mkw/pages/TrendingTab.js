import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
} from 'react-native';
import RepositoryDetail from "./RepositoryDetail";
import TrendingDataRepository from "../expand/dao/TrendingDataRepository";
import Constant from "../../tyzg/util/Constant";
import TrendingCell from "../view/TrendingCell";

export default class TrendingTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
        };
        this.dataRepository = new TrendingDataRepository();
        this.type=Constant.TRENDING_CATEGORY[0].key;
    }

    componentDidMount() {
        this.loadData();
        console.log('TrendingTab componentDidMount');
    }
    setType(type){
        this.type=type;
    }
    getUrl(language, type) {
        return 'https://github.com/trending/' + language + '?since=' + type;
    }

    loadData() {
        let url = this.getUrl(this.props.tabLabel, this.type);
        console.log(this.type);
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

    onItemClick(item) {
        let url = 'https://github.com/' + item.fullName;
        this.props.navigation.navigate('RepositoryDetail', {title: item.fullName, url: url})
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




