import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
} from 'react-native';

import DataRepository from "../expand/dao/DataRepository";
import {getUrl} from "./PopularPage";
import PopularCell from "../view/PopularCell";
import WebViewPage from "./WebViewPage";


export default class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            refreshing: false,
        };
        this.dataRepository = new DataRepository();
    }

    componentDidMount() {
        this.loadData();
    }
    getUrl(query) {
        return 'https://api.github.com/search/repositories?q=' + query + '&sort=stars';
    }
    loadData() {
        let url = this.getUrl(this.props.tabLabel);
        this.setState({
            refreshing: true,
        });
        this.dataRepository.fetchRepository(url)
            .then(result => {
                this.setState({
                    data: result.items,
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
        this.props.navigation.navigate('WebViewPage', {title: item.name, url: item.html_url})
    }

    _renderItem({item}) {
        return <PopularCell item={item} onItemClick={() => this.onItemClick(item)}/>
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




