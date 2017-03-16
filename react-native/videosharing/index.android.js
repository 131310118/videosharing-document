/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    View,
    Image,
    Text,
    PanResponder,
    TouchableHighlight,
    Animated,
    Easing,
    StatusBar,
    ScrollView,
    RefreshControl,
    ViewPagerAndroid
    } from 'react-native';
import RegisterLeaf from './js/common/RegisterLeaf';
import WaitingLeaf from './js/common/WaitingLeaf';
import Page1 from './js/common/Page1';
import ImageEquallyEnlarge from './js/common/ImageEquallyEnlarge';
import Header from './js/common/Header';
import Aside from './js/common/Aside';
import Nav from './js/common/Nav';
import Slide from './js/common/Slide';
import Artical from './js/common/Artical';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

class NaviModule extends Component {
    state = {
        asideLeft: new Animated.Value(-totalWidth),
        opacity: new Animated.Value(0),
        bgLeft: new Animated.Value(-totalWidth),
        headerTop: new Animated.Value(0),
        scrollValue: new Animated.Value(0),
        //slideTo: 2
    };
    //Header start
    press = false;
    statusBarHeight = 25;
    watcher = PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        //onStartShouldSetPanResponder: () => true,
        onPanResponderStart: this._onPanResponderStart.bind(this),
        onPanResponderMove: this._onPanResponderMove.bind(this),
        onPanResponderEnd: this._onPanResponderEnd.bind(this)
    });
    _onPanResponderStart() {
        console.log('press start');
        this.press = true;
    }
    _onPanResponderMove(e, gestureState) {
        if(this.asideBar === undefined) {
            return;
        }
        let touchPointX = gestureState.moveX;
        let touchPointY = gestureState.moveY;
        //console.log('press:' + this.press + 'touchPointX:' + touchPointX + 'touchPointY:' + touchPointY + 'right:' + this.asideBar.right + 'top:' + this.asideBar.top + 'bottom:' + this.asideBar.bottom);
        if(this.press && (touchPointX > this.asideBar.right || touchPointX < this.asideBar.left ||
            touchPointY > this.asideBar.bottom || touchPointY < this.asideBar.top)) {
            this.press = false;
        }
    }
    _onPanResponderEnd() {
        if(this.press === true && this.asideBar !== undefined) {
            Animated.sequence([
                Animated.timing(this.state.bgLeft, {toValue: 0, duration: 0}),
                Animated.parallel([
                    Animated.timing(this.state.opacity, {toValue: 0.624, duration: 200}),
                    Animated.timing(this.state.asideLeft,{toValue: 0, duration: 200})
                ])
            ]).start()
        }
    }
    _onLayout(event) {
        this.asideBar = {};
        this.asideBar.top = event.nativeEvent.layout.y + this.statusBarHeight;
        this.asideBar.left = event.nativeEvent.layout.x;
        this.asideBar.right = this.asideBar.left + event.nativeEvent.layout.width;
        this.asideBar.bottom = this.asideBar.top + event.nativeEvent.layout.height;
    }
    //Nav start
    pageTo(p) {
        this.scrollView.setPage(p);
    }
    //articals start
    onPageScroll(event) {
        const { offset, position, } = event.nativeEvent;
        let value = position + offset;
        this.state.scrollValue.setValue(value);
    };
    onPageSelected(event) {
        //console.log(event.nativeEvent.position);
        //this.setState({page: event.nativeEvent.position});
    };
    onPageScrollStateChanged(state) {
        //console.log(state);
        //this.setState({scrollState: state});
    };
    //slide start
   /* slideTo(p) {
        this.setState({
            slideTo: p
        })
    }*/
    //index start
    onBackAndroid = (event) => {
        const {navigator} = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    };
    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }
    renderScene(router, navigator){
        switch (router.name) {
            case 'Page1':
                return <Page1 navigator={this.refs.navigator}/>;
            case "register":
                return <RegisterLeaf/>;
            case "waiting":
                return <WaitingLeaf phoneNumber={router.phoneNumber} userPW={router.userPW}/>;
            case 'imageEquallyEnlarge':
                return (
                    <View>
                        <ImageEquallyEnlarge source={{uri: 'https://oe9nbfytu.qnssl.com/dowload_app.png'}}
                                             style={{width: 50, height: 30}}/>
                    </View>
                );
            case 'image':
                return (
                    <View>
                        <Image style={{width: 100, height: 100, resizeMode: "contain"}} source={require('./img/test.jpg')}/>
                    </View>
                );
            case 'URLimage':
                return (
                    <View>
                        <Image style={{width: 100, height: 100, resizeMode: "contain"}} source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'}}/>
                    </View>
                );
            case 'index':
                return (
                    <Animated.View style={{height: totalHeight, width: totalWidth, position: 'absolute', top: 0}}>
                        {/*<StatusBar ref='statusBar' backgroundColor={'#de698c'}/>*/}
                        <StatusBar ref='statusBar' backgroundColor={'rgba(0,0,0,0)'} translucent={true}/>
                        {/*<StatusBar animated={true} hidden={false} backgroundColor={'#de698c'} translucent={true}
                                   barStyle={'default'} showHideTransition={'fade'} networkActivityIndicatorVisible={true}/>*/}
                        <View style={{height: this.statusBarHeight, backgroundColor: '#fb7298'}}/>
                        <Header watcher={this.watcher} username='pilipili' style={{height: 56}}  onLayout={this._onLayout.bind(this)}/>
                        <Nav onFocus='0' style={{height: 40}} totalWidth={totalWidth} pageTo={this.pageTo.bind(this)}
                             scrollValue={this.state.scrollValue}/>
                        <ViewPagerAndroid ref={(scrollView) => { this.scrollView = scrollView; }} initialPage={0} scrollEnabled={true}
                                          onPageScroll={this.onPageScroll.bind(this)} onPageSelected={this.onPageSelected.bind(this)}
                                          onPageScrollStateChanged={this.onPageScrollStateChanged.bind(this)} style={{flex: 1}}>
                            <View>
                                <ScrollView refreshControl={<RefreshControl refreshing={true} style={{backgroundColor: '#eaeaea'}}/>} showsVerticalScrollIndicator={true}>
                                    <Slide totalWidth={totalWidth} onSlide={0} style={{height: 337 / 3}}/>
                                    <Artical totalWidth={totalWidth}/>
                                </ScrollView>
                            </View>
                            <View>
                                <ScrollView refreshControl={<RefreshControl refreshing={true} style={{backgroundColor: '#eaeaea'}}/>} showsVerticalScrollIndicator={true}>
                                    <Slide totalWidth={totalWidth} onSlide={0} style={{height: 337 / 3}}/>
                                    <Artical totalWidth={totalWidth}/>
                                </ScrollView>
                            </View>
                        </ViewPagerAndroid>
                        <Aside /*watcher={this.watcher1} */totalHeight={totalHeight} totalWidth={totalWidth}
                               asideLeft={this.state.asideLeft} statusBarHeight={this.statusBarHeight}
                               bgLeft={this.state.bgLeft} opacity={this.state.opacity}/>
                    </Animated.View>
                );
        }
    };
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid);
    };
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress',this.onBackAndroid);
    };
    render() {
        return (
            <Navigator ref='navigator' initialRoute={{name: 'index'}} configureScene={this.configureScene.bind(this)}
                       renderScene={this.renderScene.bind(this)}/>
        )
    }
}

AppRegistry.registerComponent('videosharing', () => NaviModule);
