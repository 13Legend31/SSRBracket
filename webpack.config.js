const path = require('path')
const nodeExternals = require('webpack-node-externals')

const browser = {
    entry: './browser/browser.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            /* {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }    */     
        ]
    },
    output: {
        path: path.resolve('public'),
        filename:'bundle.js'
    }
}

const server = {
    entry: './server/server.js',
    target:'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            /* {
                test: /\.css$/,
                use: [ 'css-loader' ]
            } */
        ]
    },
    output: {
        path:__dirname,
        filename:'server.js'
    }
}

module.exports = [browser, server]