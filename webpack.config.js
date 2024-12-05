const path = require('path')
const htmlwbp = require('html-webpack-plugin')
const wasmwbp = require('@wasm-tool/wasm-pack-plugin')
const { experiments } = require('webpack')


module.exports = {
    entry: './public/main.js',

    output: {
        // accepts a list of paths to append together
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new htmlwbp({
            template: './public/index.html'
        }),

        new wasmwbp({
            crateDirectory: path.resolve(__dirname, '.')
        })
    ],

    experiments: {
        asyncWebAssembly: true,
    }
}