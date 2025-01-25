const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mytest');
        console.log('成功连接到 MongoDB');
    } catch (error) {
        console.error('连接 MongoDB 失败:', error);
    }
};

// 导出连接方法
module.exports = connectToMongoDB;