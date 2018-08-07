import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    BackHandler,
} from 'react-native';
import LoadingModal from "../../tyzg/util/LoadingModal";

export default class StringExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this))
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this))
    }

    onBackAndroid() {
        console.log('返回按键');
        if (this.loadingModal) {
            this.loadingModal.hide();
        }

    }

    trim() {
        let str = '     a  b  c     ';
        console.log('开始' + str + '结束');
        // ^表示正则表达式开始 $表示正则表达式结束 \s表示空格 /g表示全局执行,查找所有匹配而非在找到第一个匹配后停止
        let newStr = str.replace(/(^\s*)|(\s*$)/g, '');
        console.log('开始' + newStr + '结束');
    }

    trim2() {
        let str = '     a   b  c     ';
        console.log('开始' + str + '结束');
        let newStr = str.replace(/(\s)/g, '');//替换所有空格
        console.log('开始' + newStr + '结束');
    }

    aToB() {
        let str = 'aaafdeagAAahiAAa';
        console.log(str);
        let newStr = str.replace('a', 'b');//这只是替换第一个
        console.log(newStr);
    }

    aToB2() {
        let str = 'aaafdeagAAahiAAa';
        console.log(str);
        let newStr = str.replace(/a/g, 'b');//这样才是全部替换
        console.log(newStr);
    }

    aToB3() {
        let str = 'aaafdeagAAahiAAa';
        console.log(str);
        let newStr = str.replace(/a/gi, 'b');// g表示全局执行,i表示忽略大小写
        console.log(newStr);
    }


    showModal() {
        this.loadingModal.show();
        console.log('点击了');
        // setTimeout(() => {
        //     this.loadingModal.hide();
        // }, 2000);

    }

    judgeObject() {
        let obj = {name: 'jin'};
        if (typeof obj === 'object') {//这种方式对象和数组都返回true.
            console.log('对象');
        } else {
            console.log('数组');
        }

        if (typeof [] === 'object') {
            console.log('对象22');
        } else {
            console.log('数组22');
        }

    }

    judgeArray() {
        let array = [1, 2, 3];
        console.log(Array.isArray(array));//用来判断是否是数组,对象返回false
        console.log(Array.isArray({jin: 'jin'}));
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'利用正则表达式取出前后空格'}
                    onPress={() => this.trim()}
                />
                <Button
                    title={'利用正则表达式取出前后空格222'}
                    onPress={() => this.trim2()}
                />
                <Button
                    title={'把a替换为b'}
                    onPress={() => this.aToB()}
                />
                <Button
                    title={'把a替换为b222'}
                    onPress={() => this.aToB2()}
                />
                <Button
                    title={'把a替换为b333'}
                    onPress={() => this.aToB3()}
                />
                <Button
                    title={'显示modal'}
                    onPress={() => this.showModal()}
                />
                <Button
                    title={'判断对象'}
                    onPress={() => this.judgeObject()}
                />
                <Button
                    title={'判断数组'}
                    onPress={() => this.judgeArray()}
                />


                <LoadingModal
                    ref={loadingModal => this.loadingModal = loadingModal}
                />
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,

        },

    });
