import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

// __dirname is not available in ES6 modules, so we define it manually
const __dirname = path.resolve();

export function loadEnv() {
    // 获取当前环境，如果没有设置，默认使用 development
    const currentEnv = process.env.NODE_ENV || 'development';
    // 注意文件是在webpack.config里执行的，所以此处的路径无须获取到src层
    const currentPath = path.join(__dirname, '/');
    // 基本的 .env 文件路径
    const basePath = `${currentPath}.env`;
    // 当前环境的 .env 文件路径
    const envPath = `${basePath}.${currentEnv}`;
    // 如果当前环境的 .env 文件存在，使用它，否则使用基本的 .env 文件
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;
    // 读取 .env 文件中的变量
    const fileEnv = dotenv.config({ path: finalPath }).parsed;
    // 将环境变量转换为 Webpack DefinePlugin 需要的格式
    // const envKeys = fileEnv
    //     ? Object.keys(fileEnv).reduce((prev, next) => {
    //         prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    //         return prev;
    //     }, {})
    //     : {};
    // console.log(envKeys)
    return fileEnv;
}