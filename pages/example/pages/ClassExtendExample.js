import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


/**
 * 静态方法不知道存放在哪里???????????
 * 实例字段存储在实例上
 *
 * 实例方法存储在prototype上面.
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // age这个字段存储在对象上面
    age = 22;

    grade=44;
    getAge() {
        return this.age;
    }

    toString() {
        return this.x + '...' + this.y;
    }

    static hello() {
        console.log('hello world');
    }

    getWord() {
        return 'world';
    }
}

Point.prototype.sex = '男';


class ColorPoint extends Point {
    constructor(x, y, color) {
        //在这里必须要首先调用super,得到与父类同样的实例属性和方法
        super(x, y);
        this.color = color;
    }



    toString() {
        return this.color + '...' + super.toString();
    }

    toString2() {
        return this.color + '...' + this.x + this.y+this.age+this.grade;
    }

    load() {
        console.log('load');
    }

    //这个方法不在静态链里面
    static childStatic() {

    }

    getAge() {
        //super指向父类原型,而不是父类实例
        //如果要得到父类实例的属性,应该让父类提供方法.
        return super.age;
    }

    getAge2() {
        //super指向父类原型,而不是父类实例
        //如果要得到父类实例的属性,应该让父类提供方法.

        // 但是这样也不是很靠谱,
        // 如果子类没有这个属性,那么这个属性指向父类的
        // 如果子类有这个属性,那么用子类的属性
        return super.getAge();
    }

    getSex() {
        // super指向父类原型,因此可以得到sex字段.
        return super.sex;
    }

}

export default class ClassExtendExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    extend() {
        let p1 = new ColorPoint(1, 2, 'red');
        console.log(p1 instanceof Point);
        console.log(p1 instanceof ColorPoint);
        console.log(p1.toString());
        console.log(p1.age);
        ColorPoint.hello();
        console.log('-------------');

        console.log(p1);

        // ColorPoint Point 是一个函数,一个方法
        console.log(ColorPoint);
        console.log(Point);

        //ColorPoint这个函数有一个prototype属性,这个属性是一个对象
        console.log(ColorPoint.prototype);
        console.log('-------------');
        console.log(Point.prototype);
        console.log('-------------');
        console.log(p1.__proto__);
    }

    superExample() {
        let p = new ColorPoint(1, 2, 'green');
        console.log(p.getAge());
        console.log(p.getAge2());
        console.log(p.getSex());
    }

    //todo
    prototypeExample() {
        console.log(ColorPoint.prototype === Point.prototype);
        let p = new ColorPoint(1, 2, 'xxxx');
        console.log(p.__proto__ === Point);
    }

    toString2(){
        let p=new ColorPoint(1,2,'red');
        console.log(p.toString2());
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'继承'}
                    onPress={() => this.extend()}
                />
                <Button
                    style={{marginTop: 10}}
                    title={'super指向父类的原型,而不是父类的实例'}
                    onPress={() => this.superExample()}
                />
                <Button
                    style={{marginTop: 10}}
                    title={'prototype'}
                    onPress={() => this.prototypeExample()}
                />
                <Button
                    style={{marginTop: 10}}
                    title={'toString2'}
                    onPress={() => this.toString2()}
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
