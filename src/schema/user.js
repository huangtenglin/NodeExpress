const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // 确保用户名唯一
    },
    password:{
        type: String,
        required: true,
    },

})

// 创建用户模型
const User = mongoose.model("User", userSchema);

module.exports = User;