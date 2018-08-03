import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CustomKeyPage from "./CustomKeyPage";
import CustomTitle from "../view/CustomTitle";

export default class MyPage extends Component<> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTitle title={'我的标签'}
                             {...this.props}/>
                <Text
                    onPress={() => {
                        this.props.navigation.navigate('CustomKeyPage');
                    }}
                >我的标签</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
