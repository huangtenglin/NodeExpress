const mongoose = require("mongoose");
const { jiami } = require("../utils/md5")
const baseModel = require("./baseModel")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // 确保用户名唯一
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        set: (value) => jiami(value), //  // 对用户进进行密码加密处理,
        select: false, // 表示对密码字段在查询的时候，不返回，保证用户的密码安全
    },
    phone:{
        type: String,
        required: true,
        // 对手机格式的验证
        validate:{
            validator: (value) => {
                // 验证手机号码的正则表达式
                const phoneRegex = /^1[3-9]\d{9}$/;
                return phoneRegex.test(value);
            },
            message: '不是一个正确的手机格式，请重新输入'
        }
    },
    image:{
        type: String,
        default:null,
    },
    ...baseModel
})

// 创建用户模型
const User = mongoose.model("User", userSchema);

module.exports = User;