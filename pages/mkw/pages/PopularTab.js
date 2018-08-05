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
import {getUrl} from "./Popular";
import RepositoryCell from "../view/RepositoryCell";
import RepositoryDetail from "./RepositoryDetail";

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

    loadData() {
        let url = getUrl(this.props.tabLabel);
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
        this.props.navigation.navigate('RepositoryDetail', {item: item})
    }

    _renderItem({item}) {
        return <RepositoryCell item={item} onItemClick={() => this.onItemClick(item)}/>
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




