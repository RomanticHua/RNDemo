import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constant from "../../tyzg/util/Constant";

export default class PopularCell extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            isCollected: false,
            collectIcon: require('../../../res/image/ic_unstar_transparent.png')
        };
    }
    collect() {
        let collectIcon;
        if (this.state.isCollected) {
            collectIcon = require('../../../res/image/ic_unstar_transparent.png');
        } else {
            collectIcon = require('../../../res/image/ic_star.png');
        }

        this.setState({
            isCollected: !this.state.isCollected,
            collectIcon: collectIcon,
        })
    }
    render() {
        let item = this.props.item;
        let description = item.description || '';
        let full_name = item.full_name || '';
        let avatar_url = '';
        let stargazers_count = item.stargazers_count || '';
        stargazers_count = 'Stars：' + stargazers_count;
        //数据非空判断
        if (item.owner) {
            avatar_url = item.owner.avatar_url;
        }
        return <TouchableOpacity
            onPress={this.props.onItemClick}
            activeOpacity={Constant.ACTIVE_OPACITY}
            style={styles.container}
        >
            <View style={styles.cell_container}>
                <Text style={styles.full_name}>{full_name}</Text>
                <Text style={styles.description}>{description} </Text>
                <View style={[styles.row, styles.view_star]}>
                    <View style={[styles.row, styles.center]}>
                        <Text>Author：</Text>
                        <Image
                            style={styles.stargazers}
                            source={{uri: avatar_url}}
                        />
                    </View>

                    <Text>{stargazers_count}</Text>
                    <TouchableOpacity activeOpacity={Constant.ACTIVE_OPACITY}
                                      onPress={() => this.collect()}
                    >
                        <Image source={this.state.collectIcon} style={[styles.icon, {tintColor: Constant.MAIN_COLOR}]}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddddd',

        //android
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        //android
        elevation: 2,
    },
    full_name: {
        fontSize: 16,
        color: '#212121',
        marginBottom: 2,
    },
    description: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 2,
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_star: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stargazers: {
        width: 22,
        height: 22,

    },
    icon: {
        height: 20,
        width: 20,
    }

});
