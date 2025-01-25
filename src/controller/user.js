const User = require("../model/userModel");

const registerController = async (req, res) => {
  try {
    let newUser = await new User({ ...req.body });
    let dbData = await newUser.save();
    let user = dbData.toJSON();
    delete user.password;
    res.status(200).json({
      code: 200,
      msg: "注册成功",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      msg: "服务器错误",
      data: error,
    });
  }
};

// 查询所有用户数据
const getUsersController = async (req, res) => {
  try {
    const { username } = req.query; // 获取查询参数

    let users = await User.find({username});
    // 对数据进行过滤，防止密码泄露
    if(users.length>=1){
        users = users.map((user) =>{
            const { password, ...rest } = user._doc;
            return rest
        })
        res.status(200).json({
          code: 200,
          msg: "查询成功",
          data: users,
        });
    }else{
        res.status(404).json({
          code: 404,
          msg: "用户不存在",
          data: [],
        });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      msg: "服务器错误",
      data:error,
    })
  }
}

// 用户登录
const loginController = async (req,res) =>{
  const { username, password,email} = req.body;
  try{
    let dbData = await User.findOne({username});
    // 生成token值
   if(dbData){
    const a = 2;
    a = 3;

    return res.status(200).json({
      code: 200,
      msg: "用户登录成功",
      data: []
    })
   }
  }catch(error){
    // 不可未知的原因，捕获错误
    res.status(500).json({
      code: 500,
      msg: "服务器错误",
      data:error,
    })
  }
}

module.exports = {
  registerController,
  getUsersController,
  loginController
};
