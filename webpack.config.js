import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { loadEnv } from './src/utils/loadEnv.js';

const __dirname = path.resolve();
const envKeys = loadEnv();

export default {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        // 需要解析的文件扩展名
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        // 解析目录时要使用的文件名
        mainFiles: ["index"],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: envKeys.PORT,
        open: true,
        hot: envKeys.NODE_ENV === 'development', // 启用 HMR
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx?$/, // 匹配 .ts 和 .tsx 文件
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            title: 'react-admin',
            inject: 'body', // 将所有资源注入到 body 标签
            // favicon: '' // 指定 favicon 文件的路径
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(envKeys.NODE_ENV),
        }),
    ],
};