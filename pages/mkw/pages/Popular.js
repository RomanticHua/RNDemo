import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import DataRepository from "../expand/dao/DataRepository";
import LoadingModal from "../../tyzg/util/LoadingModal";
import RepositoryCell from "./RepositoryCell";

function getUrl(query) {
    return 'https://api.github.com/search/repositories?q=' + query + '&sort=stars';
}

export default class Popular extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarBackgroundColor={'#0000AA'}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'mintcream'}
                    tabBarUnderlineStyle={styles.tab_bar_underline}
                >
                    <PopularTab tabLabel='Java'>Java</PopularTab>
                    <PopularTab tabLabel='Ios'>Ios</PopularTab>
                    <PopularTab tabLabel='Android'>Android</PopularTab>
                    <PopularTab tabLabel='JavaScript'>JavaScript</PopularTab>
                </ScrollableTabView>

            </View>
        );
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            refreshing:false,
        };
        this.dataRepository = new DataRepository();
    }

    componentDidMount() {

        this.loadData();
    }

    loadData() {
        let url = getUrl(this.props.tabLabel);
        this.setState({
            refreshing:true,
        });
        this.dataRepository.fetchNetRepository(url)
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
                   refreshing:false,
               });
            })
    }

    _renderItem({item}) {
        return <RepositoryCell item={item}/>
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
                    onRefresh={()=>this.loadData()}
                    refreshing={this.state.refreshing}
                />

            </View>
        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab_bar_underline:{
        backgroundColor:'#e7e7e7',
        height:2,
    }

});
