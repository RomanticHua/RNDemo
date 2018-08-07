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
import HTMLView from "react-native-htmlview";

export default class TrendingCell extends Component<> {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item;
        let description = item.description || '';
        let full_name = item.fullName || '';
        let contributors = item.contributors || [];
        let stargazers_count = item.meta || '';
        stargazers_count = 'Stars：' + stargazers_count;

        description = '<p>' + description + '</p>';
        return <TouchableOpacity
            onPress={this.props.onItemClick}
            activeOpacity={Constant.ACTIVE_OPACITY}
            style={styles.container}
        >
            <View style={styles.cell_container}>
                <Text style={styles.full_name}>{full_name}</Text>
                <View style={styles.description}>
                    <HTMLView
                        value={description}
                        stylesheet={{
                            a: {
                                fontSize: 14,
                                color: '#757575',
                            },
                            p: {
                                fontSize: 14,
                                color: '#757575',
                            }
                        }}
                    />
                </View>
                <Text style={styles.stargazers_count}>{stargazers_count}</Text>
                <View style={[styles.row, styles.view_star]}>
                    <View style={[styles.row, styles.center]}>
                        <Text>Build By：</Text>
                        {
                            contributors.map((value, index) => {
                                return <Image
                                    key={index}
                                    style={styles.stargazers}
                                    source={{uri: value}}
                                />
                            })
                        }

                    </View>


                    <Icon name={'star'} size={22} color={'#f00'}/>
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

        //ios
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
        marginBottom: 2,
    },
    stargazers_count: {
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


});
