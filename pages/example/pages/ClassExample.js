import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

//传统利用function来创建对象
function PointOld(x, y) {
    this.x = x;
    this.y = y;
}

//通过原型链来添加方法
PointOld.prototype.toString = function () {
    return this.x + ',' + this.y;
};

/********************************************/

class PointNew {

    state;//成员变量 正确写法

    // const state; 错误写法
    // let state; 错误写法
    //利用class来创建对象,使用constructor来实现参数传递
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //class 里面的方法不需要function这个关键字
    toString() {
        return 'new' + this.x + ',' + this.y;
    }

    //todo get 和 set 的使用暂时不清楚,下面这样调用会导致递归 ,程序栈内存溢出崩溃.
    /*get x() {
        console.log('获取x');
        return this.x;
    }

    set x(x) {
        console.log('设置x');
        this.x=x;
    }*/

    /**
     * 静态方法只能由类来调用,实例不能调用 ,这里和java不同
     */
    static getWord() {
        console.log('hello world');
    }


    /**
     * 这里的this指的是类的this,而不是类的实例中的this.
     */
    static callThis() {
        this.load();
    }

    //静态方法可以和非静态方法重名
    static load() {
        console.log('static load....');
    }

    load() {
        console.log('实例 load...');
    }

    //定义静态属性.
    static age = '12';
}

//定义静态属性
PointNew.namexx = 'jin';


//类和模块的内部，默认就是严格模式
export default class ClassExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //传统方式来创建对象
    traditionalMethod() {
        let point = new PointOld(1, 2);
        console.log(point.toString());
    }

    es6Method() {
        let point = new PointNew(2, 4);
        console.log(point.toString());

        //new PointNew的时候其实走的是constructor方法
        console.log(typeof PointNew);//function
        console.log(PointNew === PointNew.prototype.constructor);//true

        //class的所有方法都是定义在prototype对象上面的.
        console.log(point.constructor === PointNew.prototype.constructor);//true
        console.log(point.toString === PointNew.prototype.toString);//true


        point.toValue();
        point.add();
        point.delete();
    }

    /**
     * 往原型链里面添加方法
     */
    prototypeAddMethod() {
        Object.assign(PointNew.prototype, {
            toValue() {
                console.log('toValue');
            },
            add() {
                console.log('add...');
            }
        })
    }

    prototypeAddMethod2() {
        PointNew.prototype.delete = function () {
            console.log('delete...');
        }
    }

    //hasOwnProperty 来判断这个对象是否有这个属性

    //对象查看原型链可以使用point.__proto__
    //利用类名来查看原型链,可以使用PointNew.prototype,
    attrOwn() {
        let point = new PointNew(2, 3);

        console.log(point.toString());  // (2, 3)
        console.log(point.hasOwnProperty('x'));//true
        console.log(point.hasOwnProperty('y'));//true
        console.log(point.hasOwnProperty('toString'));//false
        console.log(point.__proto__.hasOwnProperty('toString'));//true
        // console.log(point.prototype.hasOwnProperty('toString'));//true
        console.log('-----------');
        console.log(point.__proto__);
        console.log('-----------');
        console.log(point.prototype);
        console.log('-----------');
        console.log(PointNew.__proto__);
        console.log('-----------');
        console.log(PointNew.prototype);

    }

    //类的实例共享一个原型对象
    samePrototype() {
        let p1 = new PointNew(1, 2);
        let p2 = new PointNew(2, 3);
        console.log(p1.__proto__ === p2.__proto__);
    }

    //类的实例共享一个原型对象,如果往原形链里面添加方法和属性,那么所有类的实例都会受到影响.
    samePrototype2() {
        let p1 = new PointNew(1, 2);
        let p2 = new PointNew(2, 3);
        p1.__proto__.query = function () {
            console.log('query....');
        };
        p1.query();
        p2.query();
        let p3 = new PointNew(3, 4);
        p3.query();
    }

    //打印类名
    logClassName() {
        console.log(PointNew.name);
    }

    setMethod() {
        let p = new PointNew(1, 2);
        console.log('------------');
        console.log(p.toString());
        console.log('------------');
        p.x = 111;
        console.log('------------');
        console.log(p.toString());
    }


    /**
     * 静态方法只能由类来调用,实例不能调用 ,这里和java不同
     */
    staticMethod() {
        PointNew.getWord();
        let p = new PointNew(1, 2);
        p.getWord();

    }

    staticInnerThis() {
        PointNew.callThis();
        console.log(PointNew);
        console.log(new PointNew(1, 2));
    }

    staticProp() {
        console.log(PointNew.namexx);
        console.log(PointNew.age);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'传统方式'}
                    onPress={() => this.traditionalMethod()}
                />
                <Button
                    title={'class方式'}
                    onPress={() => this.es6Method()}
                />
                <Button
                    title={'prototype添加方法'}
                    onPress={() => this.prototypeAddMethod()}
                />
                <Button
                    title={'prototype添加方法2'}
                    onPress={() => this.prototypeAddMethod2()}
                />
                <Button
                    title={'class属性归属'}
                    onPress={() => this.attrOwn()}
                />
                <Button
                    title={'对象共享一个原型链'}
                    onPress={() => this.samePrototype()}
                />

                <Button
                    title={'对象共享一个原型链2'}
                    onPress={() => this.samePrototype2()}
                />
                <Button
                    title={'类名'}
                    onPress={() => this.logClassName()}
                />
                <Button
                    title={'set方法'}
                    onPress={() => this.setMethod()}
                />

                <Button
                    title={'静态方法'}
                    onPress={() => this.staticMethod()}
                />
                <Button
                    title={'静态方法中的 this '}
                    onPress={() => this.staticInnerThis()}
                />
                <Button
                    title={'静态属性'}
                    onPress={() => this.staticProp()}
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
