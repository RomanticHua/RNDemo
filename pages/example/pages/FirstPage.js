import React, {Component} from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View, Alert} from 'react-native';
import KeyboardAvoidingViewExample from "./KeyboardAvoidingViewExample";
import Constant from "../../tyzg/util/Constant";
import CustomTitle from "../../mkw/view/CustomTitle";
import MyPage from "../../mkw/pages/MyPage";
import SortKeyPage from "../../mkw/pages/SortKeyPage";


const arrays = ['ScrollViewDemo', 'FetchDemo', 'SectionListExample',
    'CommunicateWithAndroid', 'PickerExample', 'SlideExample', 'KeyboardAvoidingViewExample',
    'BottomNavigator','MyPage','SortKeyPage'

];
export default class FirstPage extends Component {

    renderViewArray() {
        const {navigate} = this.props.navigation;
        let viewArray = [];
        arrays.forEach((value, index) => {
            let item = <View style={styles.item} key={index}>
                <Button
                    title={value}
                    onPress={() => {
                        navigate(value);
                    }}
                />
            </View>;
            viewArray.push(item);
        });
        return viewArray;
    }

    render() {

        return (
            <View style={styles.container}>
                
                <ScrollView style={styles.container}>
                    {this.renderViewArray()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginTop: 10,
    }

});
