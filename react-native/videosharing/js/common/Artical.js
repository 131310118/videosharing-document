/**
 * Created by wangj on 2017/1/9.
 */

'use strict';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Image,
    Text
    } from 'react-native';
import ArticalHeader from './ArticalHeader';

export default class Artical extends Component {
    articals = [{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    },{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    },{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    },{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    },{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    },{
        photo: require('../../img/photo.jpg'),
        title: '这是测试用的标题 测试显示超过两行这是测试用的标题 测试显示超过两行',
        playAmount: '1.1万',
        commentsAmount: '168'
    }];
    getArtical() {
        return this.articals.map((item, index) => {
            return (
                <View style={{width: this.props.totalWidth * 81 / 180, marginBottom: 10}} key={item.title + index}>
                    <Image source={item.photo} style={{resizeMode: 'cover', width: this.props.totalWidth * 83 / 180, height: 97}}/>
                    <View style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4,paddingBottom: 9}}>
                        <Text style={{marginBottom: 5, height: 33}}>
                            {item.title}
                        </Text>
                        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 19}}>
                            <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="caret-square-o-right" size={11} color="#999999"/>
                                <Text style={{marginLeft: 2}}>
                                    {item.playAmount}
                                </Text>
                            </View>
                            <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="comments" size={11} color="#999999"/>
                                <Text style={{marginLeft: 2}}>
                                    {item.commentsAmount}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }
    render() {
        return (
            <View>
                <ArticalHeader/>
                <View style={{flex: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {this.getArtical()}
                </View>
            </View>
        )
    }
}