const express = require("express");
const morgan = require("morgan");
const router = require("./router")
const cors = require("cors");
const connectToMongoDB = require("./model")
const app = express();


// 处理请求体
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 处理跨域
app.use(cors());
// 对错误信息的处理
app.use(morgan("dev"))
connectToMongoDB(); // 调用连接mongodb方法

app.use("/api", router);



const port = process.env.port || 3000;


app.listen(port, ()=>{
    console.log("服务已经启动：当前端口号"+port)
})