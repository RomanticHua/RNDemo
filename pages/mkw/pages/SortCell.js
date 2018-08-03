import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SortCell extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View >
                <Text>{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

});
