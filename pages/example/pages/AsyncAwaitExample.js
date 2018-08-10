import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AsyncAwaitExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    print(txt) {
        console.log(txt);
    }

    async f() {
        console.log('hello 开始');
        await this.print('hello  await......');
        return 'hello world 结束';
    }

    async f2() {
        console.log('无敌真是寂寞 开始 ');
        await this.print('无敌真是寂寞  await......');
        return '无敌真是寂寞  结束';
    }

    onClick1() {
        console.log('开始');
        this.f().then(value => console.log(value));
        this.f2().then(value => console.log(value));
        console.log('结束');
    }

    getSomething() {
        return 'something';
    }

    async testAsync() {
        return Promise.resolve('hello async');
    }

    async testError() {
        return Promise.reject('hello async error....');
    }

    // async 函数返回值会被封装成一个Promise ,因此返回值是异步的.
    //await 只能用在async标记的方法中 async 表示这个方法是异步的,await 来标记等待的代码段.
    //await 会阻塞代码,代码会卡在await那里
    //如果await 一个普通的方法,那么会顺序执行普通的方法.
    async test() {
        console.log('test start');
        let v1 = await this.getSomething();
        console.log(v1);

        let v2 = await this.testError().catch(err => {
            console.log(err);
        });
        console.log(v2);

        //await会将promise中resolve的结果返回回来
        let v3 = await this.testAsync().catch(error => {
            console.log(error);
        });
        console.log(v3);
        console.log('test end');
    }

    onClick2() {
        console.log('开始 ');
        this.test();
        console.log('结束');
    }

    /**
     * 模拟耗时操作
     */
    takeLongTime(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n > 4000) {
                    resolve(n + 2000);
                } else {
                    reject(n + 2000);
                }
            }, n)
        });
    }

    /**
     * 模拟三步耗时操作
     * @param n
     */
    step1(n) {
        console.log(`step 1 with ${n}`);
        return this.takeLongTime(n);
    }

    step2(m, n) {
        console.log(`step 2 with ${m} and ${n}`);
        return this.takeLongTime(m + n);
    }

    step3(a, b, c) {
        console.log(`step 3 with ${a} ,${b} and ${c}`);
        return this.takeLongTime(a + b + c);
    }


    async example() {
        console.log('start');
        //顺序执行三个请求,上一个请求的结果是这个请求的数据
        console.time('example');
        let time = 3000;
        let time1, time2, time3;
        time1 = await  this.step1(time).catch((err) => {
            console.log('err...' + err)
        });
        console.log('time1 ' + time1);

        //如果有错误 time1 值为 undefined,这里需要添加判断
        if (time1) {
            time2 = await  this.step2(time, time1).catch((err) => {
                console.log(err)
            });
            console.log('time2 ' + time2);
        }

        if (time1 && time2) {
            time3 = await  this.step3(time, time1, time2).catch((err) => {
                console.log(err)
            });
            console.log('time3 ' + time3);
        }

        console.timeEnd('example');
        console.log('end');

    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'基本1'}
                    onPress={() => this.onClick1()}
                />
                <Button
                    title={'基本2'}
                    onPress={() => this.onClick2()}
                />
                <Button
                    title={'常用example'}
                    onPress={() => this.example()}
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
