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

function getUrl(query) {
    return 'https://api.github.com/search/repositories?q=' + query + '&sort=stars';
}

export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
        this.dataRepository = new DataRepository();
    }


    onLoad() {
        let url = getUrl('ios');
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    data: JSON.stringify(result),
                });
            })
            .catch(error => {
                this.setState({
                    data: JSON.stringify(error),
                });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
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
        };
        this.dataRepository = new DataRepository();
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = getUrl(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                //flatList这里需要添加key,否则会提示警告
                /*  let data = [];
                  if (result && result.items) {
                      result.items.forEach((value, index) => {
                          data.push({
                              key: index + '',
                              value: value,
                          })
                      });
                  }

                  this.setState({
                      data: data,
                  });*/

                this.setState({
                    data: result.items,
                });
            })
            .catch(error => {
                Alert.alert(JSON.stringify(error));
            })
    }

    renderItemSeparator() {
        return <View style={styles.item_separator}/>
    }

    /*
        _renderItem({item, index}) {
            return <View style={{backgroundColor: '#f003'}}>
                <Text> {item.value.description + '~~~~' + index} </Text>
                <Text>{item.value.full_name}</Text>
                <Text>{item.value.description}</Text>
                <Text>{item.value.owner.avatar_url}</Text>
                <Text>{item.value.stargazers_count}</Text>
                <Text>{item.value.key}</Text>

            </View>
        }*/

    _renderItem({item, index}) {
        return <View style={{backgroundColor: '#f003'}}>
            <Text> {item.description + '~~~~' + index} </Text>
        </View>
    }

    _keyExtractor(item, index) {
        return index + '';
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={() => this.renderItemSeparator()}
                    renderItem={info => this._renderItem(info)}
                    data={this.state.data}
                    keyExtractor={(item, index) => this._keyExtractor(item, index)}
                />
            </View>
        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item_separator: {
        height: 1,
        backgroundColor: '#828282',
    }

});
