import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text, TextInput,
    View
} from 'react-native';
import GitHubTrending from "GitHubTrending/trending/GitHubTrending";
import {getUrl} from "./PopularPage";
import TrendingDataRepository from "../expand/dao/TrendingDataRepository";

const URL = 'https://github.com/trending/';
export default class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
        };
        this.dataRepository = new TrendingDataRepository();
    }

    getUrl(language) {
        return URL + language;
    }

    loadData(language) {
        console.log('联网开始'+language);
        this.dataRepository.fetchRepository(this.getUrl(language))
            .then(result => console.log(JSON.stringify(result)))
            .catch(err => console.log(err))
            .finally(()=>{console.log('联网完成');})
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{
                        height: 26,
                        borderWidth: 0.5,
                        borderColor: '#0f0f0f',
                        fontSize: 13,
                        padding: 4,
                    }}
                    underlineColorAndroid={'transparent'}
                    onChangeText={txt => {
                        this.setState({
                                language: txt,
                            }
                        );
                    }}
                />
                <Button
                    title={'联网'}
                    onPress={() => this.loadData(this.state.language)}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
