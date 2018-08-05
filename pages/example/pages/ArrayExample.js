import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ArrayExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.array = [1, 2, 2, 3, 3, 4, 4, 5];
    }

    onclickError1() {
        for (let i = 0; i < this.array.length; i++) {
            console.log('索引  ' + i + '=' + this.array[i]);
            if (this.array[i] % 2 === 0) {
                this.array.splice(i, 1);

            }
        }
        console.log(this.array);
    }

    onclickRight1() {
        for (let i = 0; i < this.array.length; i++) {
            console.log('索引  ' + i + '=' + this.array[i]);
            if (this.array[i] % 2 === 0) {
                this.array.splice(i, 1);
                i--;//删除元素之后,索引页发生改变.
            }
        }
        console.log(this.array);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'遍历删除数组元素 错误1'}
                    onPress={() => this.onclickError1()}
                />
                <Button
                    title={'遍历删除数组元素 正确1'}
                    onPress={() => this.onclickRight1()}
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
