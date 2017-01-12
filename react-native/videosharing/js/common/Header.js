/**
 * Created by wangj on 2017/1/7.
 */

'use strict';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Image,
    Text,
    } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: "stretch", height: this.props.style.height, backgroundColor: '#fb7299'}}>
                <View ref='asideBar' {...this.props.watcher.panHandlers} onLayout={this.props.onLayout} style={{flex: 0, flexDirection: 'row', alignItems: "center"}}>
                    <Image style={{width: 8, height: 13, resizeMode: "stretch"}} source={require('../../img/bar.png')}/>
                    <Image style={{width: 34, height: 34, resizeMode: "stretch", borderRadius: 34, marginLeft: 14, marginRight: 14}} source={require('../../img/photo.png')}/>
                    {/*<ImageEquallyEnlarge source={{uri: 'http://www.bugbank.cn/images/avatar/user/default.jpg'}}
                     style={{width: 40, height: 40, borderRadius: 40}}/>*/}
                    <Text style={{height: 65 / 3, color: '#ffffff'}}>
                        {this.props.username}
                    </Text>
                </View>
                <View style={{flex: 0, flexDirection: 'row', alignItems: "center"}}>
                    <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15}}>
                        <Icon name="download" size={18} color="#ffffff"/>
                    </View>
                    <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15}}>
                        <Icon name="search" size={18} color="#ffffff"/>
                    </View>
                </View>
            </View>
        )
    }
}

