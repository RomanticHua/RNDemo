import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../view/CustomTitle";

export {BottomNavigator} from '../../navigator/RootStackNavigator'

export default class MainPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTitle title={'主页'} onBackPress={Alert.alert('返回')} customBackgroundColor={Constant.mainColor}/>
                <View style={styles.container}>
                    {BottomNavigator}
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
