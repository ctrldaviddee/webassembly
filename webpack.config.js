const path = require('path')
const htmlwp = require('html-webpack-plugin')

module.exports = {
    entry: './public/main.js',

    output: {
        // accepts a list of paths to append together
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new htmlwp({
            template: './public/index.html'
        })
    ]
}