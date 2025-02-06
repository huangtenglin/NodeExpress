const express = require('express');
const router = express.Router();
const { registerController,getUsersController,loginController,updateController } = require("../controller/user")
const check = require("../utils/check.js")
const { registerValidator,loginValidator,updateValidator } = require("../middleware/userValidator/userValidator")
const { verifyToken } = require("../utils/jwt.js")

// 中间件验证手机号码/邮箱验证

const validatePhoneMiddleware = (req,res,next) =>{
    const { phone, email} = req.body;
    const errorResult = {};
    if(!check.checkPhone(phone)){
        errorResult["phone"] = "手机号码格式不正确";
    }
    if(!check.checkEmail(email)){
        errorResult["email"] = "邮箱格式不正确"
    }
    if(typeof errorResult === "object" && Object.keys(errorResult).length > 0){
        return res.status(400).json({
            message: errorResult
        })
    }
    // 如果都没有返回，则让他通过中间件的检查
    next();
}

router.post("/register",registerValidator ,registerController)
router.get("/lists",verifyToken,getUsersController)
router.post("/login", loginValidator,loginController)
router.put("/update", verifyToken, updateValidator,updateController)


module.exports = router;