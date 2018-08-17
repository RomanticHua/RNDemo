import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class InterfaceExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    add(x, y) {
        console.log(this);
        console.log(arguments);
        console.log('-----');
    }

    /**
     * 总结: 数组最后一个,可以被忽略,如果最后有两个,也只会被忽略一个,有一个元素为empty
     * 中间的,都不会被忽略
     */
    arrayTest() {
        //最后一个,可以被忽略
        let array = [1, 2, 3,];
        //如果最后有两个,例如:[1,2,3,,] 那么只会被忽略一个,数组长度为 5
        console.log(array.length);//4
        array.push(4);
        console.log(array);
        console.log(array.length);//5

        //8个元素,[1, empty × 2, 3, empty × 2, 4, empty]
        //最后两个,,被忽略了一个
        let array2 = [1, , , 3, , , 4, ,]
        console.log(array2);//8
        console.log(array2);

        let array3 = [1, , 2, , 3,];
        console.log(array3.length);//5
        console.log(array3);

    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'增加'}
                    onPress={() => {
                        this.add(1, 3)
                    }}
                />
                <Button
                    title={'增加2'}
                    onPress={this.add(1)}
                />
                <Button
                    title={'arrayTest'}
                    onPress={() => this.arrayTest()}
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
