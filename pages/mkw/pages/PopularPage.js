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
import PopularCell from "../view/PopularCell";
import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../view/CustomTitle";
import FirstPage from "../../example/pages/FirstPage";
import PopularTab from "./PopularTab";
import LanguageDao from "../expand/dao/LanguageDao";



export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.language = new LanguageDao(Constant.FLAG_LANGUAGE.POPULAR);
        this.state = {
            language: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTitle
                    {...this.props}
                    title={'主页'}
                    showLeftView={false}
                />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarBackgroundColor={Constant.MAIN_COLOR}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'mintcream'}
                    tabBarUnderlineStyle={styles.tab_bar_underline}
                >
                    {
                        this.state.language.map((value, index) => {
                            if (!value.checked) {
                                return null;
                            }
                            else {
                                return (
                                    <PopularTab key={index}
                                                tabLabel={value.name}
                                                {...this.props}>{value.name}</PopularTab>)
                            }
                        })
                    }
                </ScrollableTabView>

            </View>
        );
    }

    loadData() {
        this.language.fetch()
            .then(result => {
                this.setState({
                    language: result,
                });
            })
            .catch(err => {
                console.log(err);
            })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab_bar_underline: {
        backgroundColor: '#e7e7e7',
        height: 2,
    }

});
