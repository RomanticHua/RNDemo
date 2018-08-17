import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Video from "react-native-video";

// const url = 'http://9890.vod.myqcloud.com/9890_4e292f9a3dd011e6b4078980237cc3d3.f20.mp4';
const url = 'http://youku163.zuida-bofang.com/20180809/11334_42575f86/index.m3u8';

export default class VideoExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _onLoad(event) {
        console.log('_onLoad');
        console.log(event);
    }

    // source={require('../../../res/video/a.mp4')}
    // source={{uri: url}}
    render() {
        return (
            <View style={styles.container}>
                <Video source={{uri: url}} // Can be a URL or a local file.
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       onLoad={(event) => this._onLoad(event)}
                       onLoadStart={(event) => {
                           console.log('onLoadStart');
                           console.log(event);
                       }}
                       onProgress={(event) => {
                           console.log('onProgress');
                           console.log(event);
                       }}
                       onBuffer={(buffer) => {
                           console.log('onBuffer');
                           console.log(buffer);
                       }}                // Callback when remote video is buffering
                       onEnd={(end) => {
                           console.log('onEnd');
                           console.log(end);
                       }}                      // Callback when playback finishes
                       onError={(err) => {
                           console.log('onError');
                           console.log(err);
                       }}               // Callback when video cannot be loaded
                       style={styles.backgroundVideo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#f003'
    },

});
