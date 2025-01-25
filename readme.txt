1:项目选型架构
express + node + mongodb + eslint
2： eslint的安装配置
 1：npm i eslint -D
 2：npm init @eslint/config
跟着配置项选
3：项目结构介绍
    1: controller：路由控制器，处理业务逻辑
    2：model：数据模型，处理数据库操作
        await mongoose.connect('mongodb://localhost:27017/mytest');
        数据库的链接 其中mytest是你的数据库名