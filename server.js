// 导入Express框架
const express = require('express');

// 创建Express应用程序实例
const app = express();

// 使用Express内置的中间件来解析JSON请求体
app.use(express.json());

// 使用Express内置的中间件来解析URL编码请求体，不启用扩展模式
app.use(express.urlencoded({ extended: false }));

// 导入路由模块
const router = require('./router');

// 将路由模块挂载到"/api"路径下
app.use('/api', router);

// 启动应用程序，监听端口3000
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
