import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Constant from "../../tyzg/util/Constant";

export default class LayoutExample1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //布局可以指定宽高为父容器的百分之多少
    //在主轴方向,如果子布局超出父容器之外,可能显示不了. 除非利用scrollView或者指定wrap
    //先测量子容器,再计算父容器的高度,一般为子容器的最大高度
    //容器的布局属性不会继承,父容器中指定position,只是表示父容器在父父容器中为绝对位置. 同时父容器还可以指定子容器的主轴方向.

    //如果用Touchable组件包裹子控件,Touchable父容器也可以处理点击事件,但是如果用view包裹view,子view设置了onPress,那么点击事件传递不到父容器中
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row',}}>
                    <Text style={{backgroundColor: '#FFD700', width: 200, height: '40%'}}>1</Text>
                    <Text style={{backgroundColor: '#FF8C69', width: '40%', height: 80}}>2</Text>
                    <Text style={{backgroundColor: '#FF4040', width: '40%', height: '40%'}}>3</Text>
                </View>
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    top: 100,
                    width: 200,
                    height: 200,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        backgroundColor: '#FFD700',
                        width: '40%',
                        height: '40%',
                        marginLeft: 10,
                        marginTop: 10
                    }}>4</Text>
                    <Text style={{backgroundColor: '#CD2990', width: '40%', height: '40%',}}>5</Text>
                </View>
                <View style={{position: 'absolute', backgroundColor: '#00CD00', top: 320,}}>
                    <TouchableOpacity
                        activeOpacity={Constant.ACTIVE_OPACITY}
                        style={{backgroundColor: '#7FFFD4'}}
                        onPress={() => {
                            console.log('TouchableOpacity');
                        }}
                    >
                        <Text style={{backgroundColor: '#8B4513', width: 30, height: 20}}
                              onPress={() => {
                                  console.log('Text');
                              }}
                        >30</Text>

                    </TouchableOpacity>
                    <View style={{backgroundColor: '#FF4040', marginTop: 20, width: 60, height: 60}}
                          onPress={() => {
                              console.log('父容器555');
                          }}
                    >
                        <Text style={{backgroundColor: '#8B4513', width: 30, height: 20}}
                              onPress={() => {
                                  console.log('555');
                              }}
                        >555</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f7',

    },

});
