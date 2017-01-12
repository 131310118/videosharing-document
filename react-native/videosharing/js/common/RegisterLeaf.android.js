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
    TextInput,
    } from 'react-native';

import ConfirmDialog from './ConfirmDialog';
import Dimension from 'Dimensions';
//let PixelRatio = require('PixelRatio');
let totalWidth = Dimension.get('window').width;
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;
/*let totalHeight = Dimension.get('window').height;
 let pixelRadio = PixelRatio.get();*/

export default class RegisterLeaf extends Component {
    static propTypes = {
    }
    constructor() {
        super();
        this.state = {
            inputedNum: '',
            inputedPW: '',
            needToConfirm: false
        };
    }
    updateNum(newText) {
        this.setState(() => {
            return {
                inputedNum: newText,
            }
        });
    }
    updatePW(newText) {
        this.setState(() => {return {inputedPW: newText}});
    }
    userPressConfirm() {
        this.setState(() => {
            return {
                needToConfirm: true
            }
        });
    }
    userCanceled() {
        this.setState(() => {
            return {
                needToConfirm: false
            }
        })
    }
    userConfirmed() {
        this.setState(() => {
            return {
                needToConfirm: false
            }
        });
        this.props.navigator.replace({
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPW,
            name: 'waiting',
        })
    }
    renderWithDialog() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={this.updateNum.bind(this)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                           placeholder={'请输入密码'}
                           password={true}
                           onChangeText={this.updatePW.bind(this)}/>
                <Text style={styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>
                    确定
                </Text>
                <ConfirmDialog userConfirmed={this.userConfirmed.bind(this)} userCanceled={this.userCanceled.bind(this)}
                               amIStillAlive={this.state.needToConfirm}
                               promptToUser={'使用' + this.state.inputedNum + '号码登录？'}/>
            </View>
        )
    }

    render() {
        if(this.state.needToConfirm) {
            return this.renderWithDialog();
        }
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={this.updateNum.bind(this)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                           placeholder={'请输入密码'}
                           password={true}
                           onChangeText={this.updatePW.bind(this)}/>
                <Text style={styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>
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

//export default RegisterLeaf;
//module.exports = RegisterLeaf;
//AppRegistry.registerComponent('videosharing', () => videosharing);
