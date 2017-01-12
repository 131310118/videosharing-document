/**
 * Created by wangj on 2017/1/3.
 */

'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WaitingLeaf extends Component {
    /*constructor() {
        super();
        this.goBack = () => {
            this.props.navigator.push({name: 'register'});
        };
    }*/
    static propTypes = {
        phoneNumber: React.PropTypes.number.isRequired,
        userPW: React.PropTypes.string.isRequired
    };

    goBack() {
        this.props.navigator.push({name: 'register'});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    注册使用手机号：{this.props.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    注册使用密码：{this.props.userPW}
                </Text>
                <Text style={styles.bigTextPrompt} onPress={this.goBack.bind(this)}>
                    返回
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    textPromptStyle: {
        fontSize: 20
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
});

//export default WaitingLeaf;
//module.exports = WaitingLeaf;
