const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const toJwt = promisify(jwt.sign);
// const verfiy = promisify(jwt.verify);
const { unId } = require("../config/index")
/**
 * 
 * @param {*} userInfo 为一个对象用户参数，unId为秘钥,expiresIn为token过期时间
 * @returns 返回token值
 */
const createToken = async (userInfo) =>{
    return await toJwt({...userInfo}, unId,{ expiresIn: 60 * 60 * 24 * 7})
}

// 对接口请求token的验证
const verifyToken = async(req,res,next) =>{
    let token = req.headers.authorization; // 获取请求头配置的token值
    token = token? token.split("Bearer ")[1] : undefined
    if(!token){
        return res.status(402).json({error: '请传入token'})
    }
    try{
        let userinfo = await jwt.verify(token, unId);
        req.user = userinfo;
        next();
    }catch(error){
        // 走到catch，说明验证不通过
        return res.status(402).json({error: '无效的token'})
    }
}

module.exports = {
    createToken,
    verifyToken
}