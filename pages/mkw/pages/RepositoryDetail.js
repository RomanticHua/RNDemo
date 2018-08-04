import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, WebView
} from 'react-native';
import CustomTitle from "../view/CustomTitle";

export default class RepositoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    _onBackClick() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            this.props.navigation.pop();
        }
    }

    _onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        const {params} = this.props.navigation.state;
        let item = params.item;
        return (
            <View style={styles.container}>
                <CustomTitle title={item.name} onBackClick={() => this._onBackClick()}/>
                <WebView
                    ref={webView => this.webView = webView}
                    style={styles.webView}
                    source={{uri: item.html_url}}//url地址
                    startInLoadingState={true}//强制WebView在第一次加载时先显示loading视图。默认为true
                    scalesPageToFit={true}//设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
                    onNavigationStateChange={(navState) => this._onNavigationStateChange(navState)}//状态发生改变的时候调用

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1,
    },
    view_error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
