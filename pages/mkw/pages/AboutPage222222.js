/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text, TouchableOpacity,
    View,
    Linking, FlatList, LayoutAnimation,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Constant from "../../tyzg/util/Constant";
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewRenderUtils from "../../tyzg/util/ViewRenderUtils";
import todos from "../../example/toDo";

const window = Dimensions.get('window');
const AVATAR_SIZE = 120;//图片尺寸
const PARALLAX_HEADER_HEIGHT = 300;//视差高度
const STICKY_HEADER_HEIGHT = Constant.TITLE_HEIGHT;//固定头部高度
const HEADER_PIC = 'http://www.devio.org/io/GitHubPopular/img/for_githubpopular_about_me.jpg';
const FOREGROUND_PIC = 'https://avatars2.githubusercontent.com/u/8716595?v=4&s=460';
const FOREGROUND_TXT = '专注于移动开发，分享知识，共享快乐。';
const windowW = Dimensions.get('window').width;
const array = [

    {
        icon: require('../../../res/image/ic_computer.png'), txt: 'Website', flag: 'website', subItems: [
            {txt: 'A'},
            {txt: 'B'},
            {txt: 'C'},
        ], isExpand: false,
    },
    {
        icon: require('../../../res/image/ic_insert_emoticon.png'), txt: '关于作者', flag: 'about_author', subItems: [
            {txt: 'DD'},
            {txt: 'EE'},
            {txt: 'FF'},
        ], isExpand: false,

    },
    {
        icon: require('../../../res/image/ic_feedback.png'), txt: '反馈', flag: 'feedback', subItems: [
            {txt: 'GGGG'},
            {txt: 'HHHH'},
            {txt: 'IIII'},
        ], isExpand: false,
    },
];

export default class AboutPage222222 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            array: array,
        };
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    /**
     * 点击标题栏
     */
    _onClickTitle(index) {
        let array = this.state.array;
        let item = array[index];
        item.isExpand = !item.isExpand;
        //todo 这里居然会打印true,不理解?  === 时,如果两个值都引用同一个对象或是函数，那么相等，否则不相等
        //todo 因此在这里,数据的值虽然发生了变化,但是引用仍然没有变,因此不会引起FlatList的刷新.

        //todo  let  array_new = array.slice(0); 这样写,就是复制了一份新的数组,因此可以触发刷新.
        let b = this.state.array === array;
        console.log('数据变化了吗?' + b);
        // let  array_new = array.slice(0);//这里现在只知道必须要这样写,这样是保证数组发生了改变,否则数组索引还是原来的索引,FlatList不认为data发生了改变.
        this.setState({
            array: array
        });
        let b1 = this.state.array === array;
        console.log('数据变化了吗?' + b1);

        //让布局有一个缓进缓出的效果,比较好,没有这句代码的话,布局显示和隐藏会十分生硬
        LayoutAnimation.easeInEaseOut();


    }

    renderTitle(item, index) {
        let {icon, txt} = item;
        return (
            <TouchableOpacity activeOpacity={Constant.ACTIVE_OPACITY}
                              onPress={() => this._onClickTitle(index)}
                              style={{height: 60, width: windowW}}
            >
                <View style={styles.item_small}>
                    <View style={styles.item_small_left}>
                        <Image source={icon}
                               style={[styles.item_icon, {tintColor: Constant.MAIN_COLOR}]}
                        />
                        <Text style={styles.item_title}>{txt}</Text>
                    </View>
                    <Image source={require('../../../res/image/ic_tiaozhuan.png')}
                           style={{tintColor: Constant.MAIN_COLOR}}
                    />
                </View>
            </TouchableOpacity>
        );
    }


    //布局中使用代码只能用三目运算符,if else 不能使用.
    _renderItem(item, index) {
        console.log('renderItem');
        return (
            <View>
                {this.renderTitle(item, index)}
                {item.isExpand ?
                    item.subItems.map((item, index) => {
                        return (
                            <Text key={index}
                                  style={{backgroundColor: '#f003', height: 30, width: windowW,}}
                                  onPress={() => {
                                      //虽然在这里触发state状态改变,会重新走render方法,但是FlatList不会重新绘制,因为FlatList的
                                      //  extraData={this.state.selectedIndex} 只有this.state.selectedIndex变化时才触发FlatList更新
                                      this.setState({
                                          data: this.state.data + '1',
                                      });
                                      console.log(this.state.data);
                                  }}
                            >{item.txt}</Text>
                        )
                    })
                    : null}
            </View>


        );
    }


    _keyExtractor(item, index) {
        return index + '';
    }

//给FlatList指定extraData={this.state}属性，是为了保证state.selected变化时，
// 能够正确触发FlatList的更新。如果不指定此属性，
// 则FlatList不会触发更新，因为它是一个PureComponent，
// 其props在===比较中没有变化则不会触发更新。

    render() {

        console.log('render...');
        return (
            <FlatList
                ref={flatList => this.flatList = flatList}
                style={styles.flatList}
                renderItem={({item, index}) => this._renderItem(item, index)}
                data={this.state.array}
                keyExtractor={(item, index) => this._keyExtractor(item, index)}

            />

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    flatList: {
        flex: 1
    },
    back: {
        width: Constant.ICON_WIDTH,
        height: STICKY_HEADER_HEIGHT,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },
    touchable_back: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickySectionText: {
        color: 'white',
        fontSize: 18,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        height: PARALLAX_HEADER_HEIGHT,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 18,
        marginTop: 15
    },
    item_small_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_small: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    item_icon: {
        height: 22,
        width: 22,
    },
    item_title: {
        marginLeft: 10,
    },
    listSubBg: {
        width: windowW,
    },
});

