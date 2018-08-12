import React, {Component} from 'react';
import {View, LayoutAnimation, TouchableOpacity, Text , StyleSheet} from 'react-native';

export default class LayoutAnimations extends Component {

    constructor (props) {
        super(props);
        //设置默认宽高
        this.state = {
            width: 100,
            height: 100
        }
    }

    // 点击按钮事件
    viewAnimation = () => {

        /*
        * ====== 设置完动画后直接改变view属性就可以, 使用this.setStage{} ======
        * */

        /*
        * ************ 方式一 ************
        * */

        /*
        * -------- 代码
        * */
        // LayoutAnimation.configureNext({
        //     duration: 1000,
        //     create: {
        //         type: LayoutAnimation.Types.spring,
        //         property: LayoutAnimation.Properties.scaleXY
        //     },
        //     update: {
        //         type: LayoutAnimation.Types.spring,
        //         springDamping: 0.2,
        //     },
        // })

        /*
        * -------- 简介
        * configureNext
        * 可以有四个参数 API:
            * type Config = {
            duration: number, 持续时间
            create?: Anim,    创建
            update?: Anim,    更新
            delete?: Anim,    删除
        }
        * */

        /*
        * 接上面的create update delete 创建方式 --- Anime API:
        * type Anim = {
            duration?: number,                      持续时间,只写config里的就行
            delay?: number,                         延迟时间
            springDamping?: number,                 弹跳阻尼系数 0-1, 越小速度越快 (结合spring使用)
            initialVelocity?: number,               初始速度
            type?: $Enum<typeof TypesEnum>,         类型 定义在LayoutAnimation.Types中
            property?: $Enum<typeof PropertiesEnum>,属性 定义在LayoutAnimation.Properties中
        }
        * */

        /*
        * 接上面的 type 和 property 的类型, API:
        * var TypesEnum = {
            spring: true,           弹跳
            linear: true,           线性
            easeInEaseOut: true,    缓入缓出
            easeIn: true,           缓入
            easeOut: true,          缓出
            keyboard: true,         ...
        };

        var PropertiesEnum = {
            opacity: true,          透明度
            scaleXY: true,          缩放
        };
        * */


        /*
        * ************ 方式二 ************
        * */

        /*
        * -------- 代码
        * */

        // LayoutAnimation.configureNext(
        //     LayoutAnimation.create(
        //         700,
        //         LayoutAnimation.Types.spring.spring,
        //         LayoutAnimation.Properties.scaleXY,
        //     )
        // );

        /*
        * -------- 简介
        * LayoutAnimation.create(duration: number, type, creationProp)
        * 接受三个参数:持续时间, 动画类型, 动画属性
        * */


        /*
        * ************ 方式三 ************
        * */

        /*
        * -------- 代码
        * */
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

        /*
        * -------- 简介
        * 直接用用默认的动画, 通过Presets获取, 参数都是设置好的, API:
        * var Presets = {
            easeInEaseOut: create(
                300, Types.easeInEaseOut, Properties.opacity
            ),
            linear: create(
                500, Types.linear, Properties.opacity
            ),
            spring: {
                duration: 700,
                create: {
                    type: Types.linear,
                    property: Properties.opacity,
                },
                update: {
                    type: Types.spring,
                    springDamping: 0.4,
                },
                delete: {
                    type: Types.linear,
                    property: Properties.opacity,
                },
            },
        };
        * */


        /*
        * ************ 方式四 ************
        * */

        /*
        * -------- 代码
        * */
        LayoutAnimation.spring();

        /*
        * -------- 简介
        * 最简单,直接调用方法,其实bind的也是方式三中的Presets API:
        * easeInEaseOut: configureNext.bind(
            null, Presets.easeInEaseOut
        ),
            linear: configureNext.bind(
            null, Presets.linear
        ),
            spring: configureNext.bind(
            null, Presets.spring
        ),
        * */

        // 改变宽高
        this.setState({
            width: this.state.width + 20,
            height: this.state.height + 20
        })
    }

    render () {
        return (
            <View
                style={styles.bgView}
            >
                <View
                    style={[
                        styles.animateView,
                        {
                            width: this.state.width,
                            height: this.state.height
                        }
                    ]}
                />

                <TouchableOpacity
                    style={styles.touchView}
                    onPress={this.viewAnimation}
                >
                    <Text
                        style={styles.touchText}
                    >
                        我擦...
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    bgView:{
        flex: 1,
        alignItems: 'center'
    },
    animateView:{
        marginTop: 100,
        height: 100,
        width: 100,
        backgroundColor: 'cyan'
    },
    touchView:{
        marginTop: 200
    },
    touchText:{
        height: 20,
        width: 100,
        backgroundColor: 'gray',
        color: 'yellow',
        fontSize: 18,
        textAlign: 'center'
    }
})
