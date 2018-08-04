import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TouchableHighlight,
    View
} from 'react-native';

export default class SortCell extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * Touchable组件内部只有一个元素
     */
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={styles.item}
                {...this.props.sortHandlers}
            >
                <View style={styles.view_touchable}>
                    <Image style={styles.img} source={require('../../../res/image/ic_sort.png')}/>
                    <Text>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 15,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 0.3,
        borderColor: '#CDC9C9',

    },
    view_touchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        tintColor: '#2196f3',
        height: 25,
        width: 25,
        marginRight: 10,
    },
});
