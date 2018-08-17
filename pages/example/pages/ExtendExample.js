import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

//定义一个父类
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + '正在睡觉!');
    }
}
Animal.prototype.eat=function () {
    console.log('eat...');
};

/**
 * 子类的原型是父类的实例,因此父类的所有方法子类都可以调用
 * 但是因为子类的原型是父类的实例,因此必须先new一个父类,这导致在new一个子类的时候,不给父类传值.
 */
function Cat() {
}
Cat.prototype = new Animal();
Cat.prototype.name = 'Cat';

//构造继承

/**
 * 构造继承,得到父类构造方法中的属性和方法,但是不能得到父类原型的方法.
 * @param name
 * @constructor
 */
function Dog(name) {
    Animal.call(this);
    this.name = name || 'Dog';
}

//组合继承
function Duck(name){
    Animal.call(this);
    this.name=name||'Duck';
}
Duck.prototype=new Animal();

export default class ExtendExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    prototypeExtend() {
        let cat = new Cat();
        console.log(cat.name);
        cat.sleep();
        console.log(cat instanceof Animal);
        console.log(cat instanceof Cat);
    }

    constructorExtend() {
        let dog = new Dog();
        console.log(dog.name);
        dog.sleep();
        console.log(dog instanceof Animal);
        console.log(dog instanceof Dog);
        console.log(dog.eat);//dog中没有eat这个方法
        // dog.eat();//dog.eat is not a function
    }

    combineExtend() {
        let duck = new Duck();
        console.log(duck.name);
        duck.sleep();
        console.log(duck instanceof Animal);
        console.log(duck instanceof Duck);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'原型链继承'}
                    onPress={() => this.prototypeExtend()}
                />
                <Button
                    title={'构造继承'}
                    onPress={() => this.constructorExtend()}
                />
                <Button
                    title={'组合继承'}
                    onPress={() => this.combineExtend()}
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
