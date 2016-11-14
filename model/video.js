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
    team: {type: Number, default: 0},  // 0�з�1�� /1�з�2��
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
        type: {type: Boolean, default: 0},      //���ͣ�0ԭ��/1ת�أ�
        source: {type: String, default: "ԭ��"},//��Դ
        uv: {type: Number, default: 0},         //�������
        del: {type: Boolean, default: 0},       //��ɾ��
        chk: {type: Boolean, default: 0},       //��ˣ�Ĭ��δͨ��
        key: []                                 //�ؼ���
    }
})