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

export default class ArticalHeader extends Component {
    render() {
        return (
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, marginBottom: 10, height: 31, paddingLeft: 12, paddingRight: 12}}>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{height: 24, width: 24, resizeMode: "stretch"}} source={require('../../img/recommend.png')}/>
                    <Text style={{marginLeft: 20 / 3, color: '#333333'}}>
                        热门推荐
                    </Text>
                </View>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 4}}>
                        更多
                    </Text>
                    <Icon name="angle-right" size={11} color="#666666"/>
                </View>
            </View>
        )
    }
}
