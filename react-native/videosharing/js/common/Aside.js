/**
 * Created by wangj on 2017/1/7.
 */

'use strict';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Animated,
    ScrollView,
    Text,
    PanResponder
    } from 'react-native';

export default class Aside extends Component {
    state = {
        asideLeft: this.props.asideLeft,
        bgLeft: this.props.bgLeft,
        opacity: this.props.opacity
    };
    watcher = PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => false,
        onStartShouldSetPanResponder: () => false,
        onPanResponderMove: this._onPanResponderMove.bind(this),
        onPanResponderEnd: this._onPanResponderEnd.bind(this),
        onResponderTerminationRequest: true
    });
    _onPanResponderMove(e, gestureState) {
        let totalWidth = this.props.totalWidth;
        let tol = 0;
        if(gestureState.x0 >= totalWidth * 0.75) {
            tol = gestureState.moveX - totalWidth * 0.75;
            if((gestureState.dx == 0 && gestureState.dy == 0) || gestureState.dx < -totalWidth * 0.5 || (tol < 0 && gestureState.vx < -0.2)) {
                this.hideAside = true;
            } else {
                this.hideAside = false;
            }
        } else {
            this.lastPointX = this.lastPointX || gestureState.x0;
            tol = this.state.asideLeft._value + gestureState.moveX - this.lastPointX;
            console.log(this.state.asideLeft._value);
            console.log(gestureState.moveX);
            console.log(this.lastPointX);
            console.log(tol);
            if(gestureState.dx < -totalWidth * 0.5 || (tol < 0 && gestureState.vx < -0.2)) {
                this.hideAside = true;
            } else {
                this.hideAside = false;
            }
            this.lastPointX = gestureState.moveX;
        }
        if(tol > 0) {
            tol = 0;
        }
        if(tol < -totalWidth) {
            tol = -totalWidth;
        }
        this.state.asideLeft.setValue(tol);
        Animated.parallel([
            Animated.timing(this.state.opacity, {toValue: 0.624 / totalWidth * (totalWidth + tol), duration: 0}),
            Animated.timing(this.state.asideLeft,{toValue: tol, duration: 0})
        ]).start()
    }
    _onPanResponderEnd() {
        let totalWidth = this.props.totalWidth;
        if(this.hideAside) {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(this.state.opacity, {toValue: 0, duration: 200/* * this.state.opacity / 0.624*/}),
                    Animated.timing(this.state.asideLeft,{toValue: -totalWidth, duration: 200/* * this.state.opacity / 0.624*/})
                ]),
                Animated.timing(this.state.bgLeft, {toValue: -totalWidth, duration: 0})
            ]).start()
        } else {
            Animated.sequence([
                Animated.timing(this.state.bgLeft, {toValue: 0, duration: 0}),
                Animated.parallel([
                    Animated.timing(this.state.opacity, {toValue: 0.624, duration: 200/* * (0.624 - this.state.opacity) / 0.624*/}),
                    Animated.timing(this.state.asideLeft,{toValue: 0, duration: 200/* * (0.624 - this.state.opacity) / 0.624*/})
                ]),
            ]).start()
        }
        this.lastPointX = undefined;
    }
    render() {
        return (
            <Animated.View style={{position: 'absolute', top: 0, width: this.props.totalWidth, height: this.props.totalHeight, left: this.state.asideLeft}}>
                <Animated.View {...this.watcher.panHandlers} style={{backgroundColor: '#000000', position: 'absolute', top: 0, width: this.props.totalWidth * 2, height: this.props.totalHeight, left: this.state.bgLeft, opacity: this.state.opacity}}>
                </Animated.View>
                <View {...this.watcher.panHandlers} style={{width: this.props.totalWidth * 133 / 180, backgroundColor: '#fafafa', elevation: 10}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{height: 605 / 3, backgroundColor: '#fb7299'}}/>
                        <View>
                            <View style={{paddingTop: 8, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#dcdcdc'}}>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18, backgroundColor: '#e9e9e9'}}>
                                    <Icon name="home" size={20} color="#fb7299"/>
                                    <Text style={{marginLeft: 34, color: "#fb7299"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                            </View>
                            <View style={{paddingTop: 8, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#dcdcdc'}}>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                            </View>
                            <View style={{paddingTop: 8, paddingBottom: 8}}>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 18}}>
                                    <Icon name="home" size={20} color="#7f7f7f"/>
                                    <Text style={{marginLeft: 34, color: "#333333"}}>
                                        首页
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.275)', height: this.props.statusBarHeight, width: this.props.totalWidth * 133 / 180, position: 'absolute', top: 0}}/>
                </View>
            </Animated.View>
            )
    }
}