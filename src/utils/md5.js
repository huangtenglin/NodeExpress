const crypto = require('crypto');
const jiami = (str) =>{
    return crypto.createHash('md5').update('htl'+str).digest('hex');
}
// 加密
module.exports= {
    jiami
}