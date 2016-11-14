/**
 * Created by mddaddADD on 2016/11/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config'),
    db = require('./db'),
    _ = require('lodash'),
    tools = require('../libs/tools');


var VideoSchema = new Schema({
    creator: {
        id: {type: Schema.Types.ObjectId, default: null},
        name: {type: String, default: null}
    },
    team: {type: Number, default: 0},  // 0研发1部 /1研发2部
    category: {type: Number, default: 0},
    data: {
        title: {type: String},
        summary: {type: String},
        video: {type: String},
        thumbnail: {type: String},
        duration: {type: String}
    },
    time: {
        create: {type: Date, default: Date.now},
        update: {type: Date, default: Date.now},
        delete: {type: Date, default: null}
    },
    attribute: {
        type: {type: Boolean, default: 0},      //类型（0原创/1转载）
        source: {type: String, default: "原创"},//来源
        uv: {type: Number, default: 0},         //浏览次数
        del: {type: Boolean, default: 0},       //软删除
        chk: {type: Boolean, default: 0},       //审核，默认未通过
        key: []                                 //关键字
    }
})