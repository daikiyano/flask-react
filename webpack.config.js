const path = require('path');


module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, '/static/dist'),
        filename: 'bundle.js'
    },

    watch: true,
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
            
            
      }
};