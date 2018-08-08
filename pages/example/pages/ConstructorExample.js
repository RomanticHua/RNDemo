import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

function User(name,age,sex) {
    //实例属性定义方式1
    this.name=name;
    this.age=age;

}

function Stu(sex) {
    //实例属性定义方式2
    Stu.prototype.name='jin';
    Stu.prototype.sex=sex;
}
function Teacher() {
}
Teacher.MAX_AGE=20;


export default class ConstructorExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 函数式构造方法
     */
    funcMode() {
        let user=new User('jin',12);
        console.log(user.name+'...'+user.age);
    }

    protoAttr(){
        let stu=new Stu('xx');
        console.log(stu.name+'...'+stu.sex);
    }

    /**
     * 类属性
     */
    classAttr(){
        console.log(Teacher.MAX_AGE);
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'构造函数方式'}
                    onPress={() => this.funcMode()}
                />
                <Button
                    title={'protptype属性'}
                    onPress={() => this.protoAttr()}
                />
                <Button
                    title={'类属性'}
                    onPress={() => this.classAttr()}
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
