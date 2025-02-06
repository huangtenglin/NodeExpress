// 验证注册中间件
const { body } = require("express-validator");
const validate = require("./errorBack")
const User = require("../../model/userModel")
const registerParams =  [
    // bail 表示如果前面的验证失败，则后面的验证不执行
    body("username").notEmpty().withMessage("用户名不能为空").bail().isLength({min:3}).withMessage("用户名长度不能小于3").custom(async (username)=>{
        const res = await User.findOne({username});
        if(res){
            return Promise.reject("用户名已经被注册，请换一个用户名")
        }
    }),
    body("password").notEmpty().withMessage("密码不能为空"),
    body("email").notEmpty().withMessage("邮箱长度不能为空").bail().isEmail().withMessage("邮箱格式不正确").custom(
        // custom自定义验证规则
         async(email) =>{
            const res = await User.findOne({email});
            if(res){
                return Promise.reject("邮箱已被注册")
            }
        }
    ),
    body("phone").notEmpty().withMessage("手机号不能为空").isMobilePhone().withMessage("手机号格式不正确").custom(
        // custom自定义验证规则
         async(phone) =>{
            const res = await User.findOne({phone});
            if(res){
                return Promise.reject("手机号已被注册")
            }
        }
    )
]

const registerValidator = validate(registerParams)

// 登录验证
const loginParams = [
    body("username").notEmpty().withMessage("用户名不能为空").bail().custom(async (username) =>{
        const res = await User.findOne({username})
        if(!res){
            return Promise.reject("用户名不存在")
        }
    }),
    body("password").notEmpty().withMessage("密码不能为空").bail(),
    body("email").notEmpty().withMessage("邮箱不能为空").bail().isEmail().withMessage("邮箱格式不正确").bail(),
]

const loginValidator = validate(loginParams)

// 用户数据的检查更新
const updateParams = [
    body("email").custom(async(email) =>{
        const res = await User.findOne({email});
        if(res){
            return Promise.reject("邮箱已经被注册")
        }
    }),
    body("phone").custom(async(phone) =>{
        const res = await User.findOne({phone});
        if(res){
            return Promise.reject("手机号已经被注册")
        }
    }),
    body("username").custom(async(username) =>{
        const res = await User.findOne({username});
        if(res){
            return Promise.reject("用户名已经被注册")
        }
    })
]

const updateValidator = validate(updateParams)

module.exports={
    registerValidator,
    loginValidator,
    updateValidator
}