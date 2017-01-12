/**
 * Created by wangj on 2017/1/8.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    ViewPagerAndroid,
    Text
    } from 'react-native';

export default class Slide extends Component {
    state = {
        height: 0
    };
    slideImg = [require('../../img/slide1.jpeg'), require('../../img/slide2.jpeg'), require('../../img/slide3.jpeg')];
    getSlide() {
        let onSlide = Math.abs(this.props.onSlide) % this.slideImg.length;
        let slideItems = [];
        if(this.slideImg.length > 1) {
            if(onSlide != 0) {
                slideItems.push(this.slideImg[onSlide - 1]);
            } else {
                slideItems.push(this.slideImg[this.slideImg.length - 1]);
            }
        }
        slideItems.push(this.slideImg[onSlide]);
        if(this.slideImg.length > 2) {
            if (onSlide != this.slideImg.length - 1) {
                slideItems.push(this.slideImg[onSlide + 1]);
            }
        }
        return slideItems.map((slideItem, index) => {
            return (
                <View key={'slideItem' + index} style={{position: 'absolute',left: index * this.props.totalWidth, top: 0, height: this.props.style.height, width: this.props.totalWidth}}>
                    <Image style={{height: this.props.style.height, width: this.props.totalWidth, resizeMode: "cover"}} source={slideItem}/>
                </View>
            )
        });
    }
    getSlideNav() {
        let l = this.slideImg.length;
        let output = [];
        while(l--) {
            if(l + this.props.onSlide == this.slideImg.length - 1) {
                output.push(
                    <View key={'slideBar' + l} style={{width: 6, height: 6, backgroundColor: '#fb7299', borderRadius: 6, marginRight: 3}}/>
                )
            } else {
                output.push(
                    <View key={'slideBar' + l} style={{width: 6, height: 6, backgroundColor: '#ffffff', borderRadius: 6, marginRight: 3}}/>
                )
            }
        }
        return output;
    }
    componentDidMount() {
        setInterval(() => this.setState({height: this.props.style.height}), 0);
    }

    render() {
        return (
            <View style={{height: this.props.style.height, width: this.props.totalWidth}}>
                {/*<View style={{position: 'absolute', height: this.props.style.height, width: this.props.totalWidth * 3, top: 0, left: -this.props.totalWidth}}>
                    {this.getSlide()}
                </View>*/}
                <View style={{height:this.state.height}}>
                    <ViewPagerAndroid initialPage={0} scrollEnabled={true} style={{flex: 1}}>
                        <View>
                            <Image style={{height: this.props.style.height, width: this.props.totalWidth, resizeMode: "cover"}} source={this.slideImg[0]}/>
                        </View>
                        <View>
                            <Image style={{height: this.props.style.height, width: this.props.totalWidth, resizeMode: "cover"}} source={this.slideImg[1]}/>
                        </View>
                    </ViewPagerAndroid>
                </View>
                <View style={{position: 'absolute', right: 0, bottom: 0, height: 18, flex: 0, flexDirection: 'row', alignItems: 'center', paddingLeft: 10.5, paddingRight: 10.5}}>
                    {this.getSlideNav()}
                </View>
            </View>
        )
    }
}
