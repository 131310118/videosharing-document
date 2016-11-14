/**
 * Created by mddaddADD on 2016/11/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config'),
    db = require('./db'),
    _ = require('lodash'),
    tools = require('../libs/tools');


var UserSchema = new Schema(
    {
        username: { type: String },
        info:{
            sex:{type: Number,default:0},// 0 Secret/1 Male/2 Female
        },
        password: { type: String },
        is_admin: { type: Boolean,default: 0 },
        signin: [],//记录登录信息
        team:{ type: Number,default: 0 },  // 0研发1部 /1研发2部
        time:
        {
            create:{type: Date,default:Date.now},
            update:{type: Date,default:Date.now},
            last_login: {type: Date,default:null},
            delete:{type: Date,default:null}
        },
        video: [], //记录视频id
        history: [],
        is_deleted:{type: Boolean,default: 0 }
    }
)