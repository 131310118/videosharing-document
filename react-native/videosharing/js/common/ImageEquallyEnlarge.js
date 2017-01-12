/**
 * Created by wangj on 2017/1/4.
 */

'use strict';
import React, {Component} from 'react';
import {
    Image
    } from 'react-native';

export default class ImageEquallyEnlarge extends Component {
    static propTypes = {
        source: React.PropTypes.shape({
            uri: React.PropTypes.string
        }),
        style: React.PropTypes.shape({
            width: React.PropTypes.number,
            height: React.PropTypes.number
        })
    };
    state = {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    };
    componentDidMount() {
        let uri = this.props.source.uri;
        Image.getSize(uri, (width, height) => {
            let layout = this.props.style;
            if(layout.width <= width) {
                this.setState({
                    width: layout.width,
                    height: layout.height,
                    top: 0,
                    left: 0
                });
                return;
            }
            if(layout.height <= height) {
                this.setState({
                    width: layout.width,
                    height: layout.height,
                    top: 0,
                    left: 0
                });
                return;
            }
            let originAspectRatio = width / height;
            let currentAspectRatio = layout.width / layout.height;
            if(originAspectRatio === currentAspectRatio) {
                this.setState({
                    width: layout.width,
                    height: layout.height,
                    top: 0,
                    left: 0
                });
                return;
            }
            if(originAspectRatio > currentAspectRatio) {
                this.setState({
                    height: layout.width / originAspectRatio,
                    width: layout.width,
                    top: (layout.height - layout.width / originAspectRatio) / 2,
                    left: 0
                });
                return;
            }
            this.setState({
                width: layout.height * originAspectRatio,
                height: layout.height,
                top: 0,
                left: (layout.width - layout.height * originAspectRatio) / 2
            });
        })
    }
    render() {
        return (
            <Image {...this.props} style={[this.props.style, {width: this.state.width, height: this.state.height,
            resizeMode: "contain", position: 'relative', top: this.state.top, left: this.state.left}]}/>
        )
    }
}
