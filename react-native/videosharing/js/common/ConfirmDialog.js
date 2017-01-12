/**
 * Created by wangj on 2017/1/3.
 */

'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, BackAndroid} from 'react-native';
import Dimensions from 'Dimensions';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

export default class ConfirmDialog extends Component {
    static defaultProps = {
        promptToUser: '你确定吗？'
    };
    static propTypes = {
        userConfirmed: React.PropTypes.func.isRequired,
        userCanceled: React.PropTypes.func.isRequired,
        amIStillAlive: React.PropTypes.bool.isRequired,
        promptToUser: React.PropTypes.string.isRequired
    };
    onBackAndroid = (event) => {
        if(this.props.amIStillAlive) {
            this.props.userCanceled();
            return true;
        }
        return false;
    };
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid)
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    render() {
        return (
            <View style={styles.confirmCont}>
                <View style={styles.dialogStyle}>
                    <Text style={styles.textPromt}>
                        {this.props.promptToUser}
                    </Text>
                    <Text style={styles.yesButton} onPress={this.props.userConfirmed} numberOfLines={3}>
                        {'\r\n'}确 定
                    </Text>
                    <Text style={styles.cancelButton} onPress={this.props.userCanceled} numberOfLines={3}>
                        {'\r\n'}取 消
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = {
    confirmCont: {
        position: 'absolute',
        top: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    dialogStyle: {
        position: 'absolute',
        top: totalHeight * 0.4,
        left: totalWidth / 10,
        width: totalWidth * 0.8,
        height: totalHeight * 0.3,
        backgroundColor: 'white'
    },
    textPromt: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 20,
        color: 'black'
    },
    yesButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: totalWidth * 0.35,
        height: totalHeight * 0.12,
        backgroundColor: 'grey',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    cancelButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: totalWidth * 0.35,
        height: totalHeight * 0.12,
        backgroundColor: 'grey',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
};

//export default ConfirmDialog;
//module.exports = ConfirmDialog;