/**
 * Created by wangj on 2017/1/4.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet
    } from 'react-native';
import NaviBar from './NaviBar';

export default class Page1 extends Component {
    state = {
        naviBarStatus: [1, 0, 0, 0]
    };
    onNaviBarPress(number) {
        let naviBarStatus = new Array(4).fill(0);
        naviBarStatus[number] = 1;
        this.setState({
            naviBarStatus: naviBarStatus
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.state.naviBarStatus} onNaviBarPress={this.onNaviBarPress.bind(this)}/>
                <View style={styles.whatLeft}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whatLeft: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black'
    }
})
