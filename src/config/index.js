// 常量
const  gennerateUniqeId = () =>{
    const timeStamp = Date.now(); // 获取当前时间戳
    const randomNum = Math.floor(Math.random() * 1000000); // 生成一个随机数
    return `${timeStamp}-${randomNum}`; // 拼接时间戳和随机数生成唯一id
}

const unId = '1737985109544-187075';

module.exports = {
    unId
}