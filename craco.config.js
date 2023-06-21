// const CracoLessPlugin = require('craco-less')
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@@': resolve('.'),
            '@': resolve('src'),
            // '@assets': resolve('src/assets'),
            // '@common': resolve('src/common'),
            // '@components': resolve('src/components'),
            // '@hooks': resolve('src/hooks'),
            // '@pages': resolve('src/pages'),
            // '@store': resolve('src/store'),
            // '@utils': resolve('src/utils')
            // 此处是一个示例，实际可根据各自需求配置
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    babel: {
        // plugins: [
        //     ['import', { libraryName: 'antd', style: true }],
        //     ['@babel/plugin-proposal-decorators', { legacy: true }]
        // ]
    },
    plugins: [
        // {
        //     plugin: CracoLessPlugin,
        //     options: {
        //         // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        //         lessLoaderOptions: {
        //             lessOptions: {
        //                 modifyVars: {},
        //                 javascriptEnabled: true
        //             }
        //         }
        //     }
        // }
    ]
}

