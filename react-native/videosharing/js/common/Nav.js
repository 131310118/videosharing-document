/**
 * Created by wangj on 2017/1/7.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Animated
    } from 'react-native';

export default class Nav extends Component {
    state = {
        undelineWidth: new Animated.Value(100),
        undelineLeft: new Animated.Value(100)
    };
    nav = ['推荐','发现'];
    _tabsMeasurements = [];
    measureTab(page, event) {
        const { x, width} = event.nativeEvent.layout;
        this._tabsMeasurements[page] = {left: x, right: x + width, width};
    }
    componentDidMount() {
        this.props.scrollValue.addListener(this.updateView.bind(this));
    };
    updateView(offset) {
        const position = Math.floor(offset.value);
        const pageOffset = offset.value % 1;
        const tabCount = 2;
        const lastTabPosition = tabCount - 1;

        if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
            return;
        }
        const lineLeft = this._tabsMeasurements[position].left;
        const lineRight = this._tabsMeasurements[position].right;

        if (position < tabCount - 1) {
            const nextTabLeft = this._tabsMeasurements[position + 1].left;
            const nextTabRight = this._tabsMeasurements[position + 1].right;

            const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
            const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

            this.state.undelineLeft.setValue(newLineLeft);
            this.state.undelineWidth.setValue(newLineRight - newLineLeft);
        } else {
            this.state.undelineLeft.setValue(lineLeft);
            this.state.undelineWidth.setValue(lineRight - lineLeft);
        }
    }
    getNav() {
        return this.nav.map((navName, index) => {
            return (
                <TouchableHighlight underlayColor={'#ef759c'} style={{flex: 0, flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingRight: 16, height: this.props.height}}
                                    key={navName + index} onPress={() => {this.props.pageTo(index)}}
                                    onLayout={this.measureTab.bind(this, index)}>
                    <Text style={{color: '#fdc7d6', textAlign: 'center'}}>
                        {navName}
                    </Text>
                </TouchableHighlight>
            )
        })
    }
    render() {
        return (
            <View style={{height: this.props.style.height}}>
                <View style={{height: this.props.style.height, backgroundColor: '#fb7298'}}>
                    <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: "stretch"}}>
                        {this.getNav()}
                    </View>
                </View>
                <Animated.View style={{position: 'absolute', left: this.state.undelineLeft, bottom: 0, width: this.state.undelineWidth, borderBottomWidth: 2, borderBottomColor: '#ffffff'}}/>
            </View>
        )
    }
}