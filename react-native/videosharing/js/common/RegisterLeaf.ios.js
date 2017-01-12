/**
 * Created by wangj on 2017/1/3.
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
    } from 'react-native';

let Dimension = require('Dimensions');
//let PixelRatio = require('PixelRatio');
let totalWidth = Dimension.get('window').width;
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;
/*let totalHeight = Dimension.get('window').height;
 let pixelRadio = PixelRatio.get();*/

class RegisterLeaf extends Component {
    constructor() {
        super();
        this.state = {
            inputedNum: '',
            inputedPW: ''
        };
        this.updateNum = (newText) => {
            this.setState(() => {
                return {
                    inputedNum: newText,
                    aBrandnewStateVariable: 'I am a new variable'
                }
            });
        };
        this.updatePW = (newText) => {
            this.setState(() => {return {inputPW: newText}});
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={this.updateNum}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                           placeholder={'请输入密码'}
                           password={true}
                           onChangeText={this.updatePW}/>
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        /*justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',*/
    },
    numberInputStyle: {
        top: 20,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        height: 30 //ios中的TextInput需要高度
        /*textAlign: 'center',
         margin: 10,*/
    },
    textPromptStyle: {
        top: 30,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        /*textAlign: 'center',
         color: '#333333',
         marginBottom: 5,*/
    },
    passwordInputStyle: {
        top: 50,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        height: 30
    },
    bigTextPrompt: {
        top: 70,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60,
    }
});

module.exports = RegisterLeaf;
//AppRegistry.registerComponent('videosharing', () => videosharing);
