import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CustomKeyPage from "./CustomKeyPage";

export default class MyPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={()=>{
                        this.props.navigation.navigate('CustomKeyPage');
                    }}
                >我的</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
