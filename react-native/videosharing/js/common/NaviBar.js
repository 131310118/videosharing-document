/**
 * Created by wangj on 2017/1/4.
 */

'use strict'
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
    } from 'react-native';
import Dimensions from 'Dimensions';
let totalWidth = Dimensions.get('window').width;
let naviButtonWidth = totalWidth / 4;
let naviButtonHeight = naviButtonWidth * 0.75;

export default class NaviBar extends Component {
    static propTypes = {
        naviBarStatus: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
        onNaviBarPress: React.PropTypes.func.isRequired
    };
    _naviTab0Press() {
        this.props.onNaviBarPress(0);
    }
    _naviTab1Press() {
        this.props.onNaviBarPress(1);
    }
    _naviTab2Press() {
        this.props.onNaviBarPress(2);
    }
    _naviTab3Press() {
        this.props.onNaviBarPress(3);
    }
    render() {
        let buttonColors = this.props.naviBarStatus.map((aNumber) => {
            if(aNumber == 0) {
                return styles.unactiveNaviBar;
            }
            return styles.activeNaviBar;
        });
        return (
            <View style={styles.naviRow}>
                <TouchableHighlight onPress={this._naviTab0Press.bind(this)}>
                    <View style={[styles.button, buttonColors[0]]}>
                        <Text style={styles.textStyle}>
                            栏目一
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab1Press.bind(this)}>
                    <View style={[styles.button, buttonColors[1]]}>
                        <Text style={styles.textStyle}>
                            栏目二
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab2Press.bind(this)}>
                    <View style={[styles.button, buttonColors[2]]}>
                        <Text style={styles.textStyle}>
                            栏目三
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab3Press.bind(this)}>
                    <View style={[styles.button, buttonColors[3]]}>
                        <Text style={styles.textStyle}>
                            栏目四
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row'
    },
    button: {
        width: naviButtonWidth,
        height: naviButtonHeight,
        justifyContent: 'center'
    },
    activeNaviBar: {
        backgroundColor: 'gray'
    },
    unactiveNaviBar: {
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
});
