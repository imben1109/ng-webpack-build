const path = require('path');

module.exports = {
    name: 'build',
    entry: {
        main: './src/main.ts',
        vendor: [
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/http',
            '@angular/router',
            'rxjs'
        ],
        polyfills: './src/polyfills.ts'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'webpack-dist')
    },
    module: {
        rules: [
            {

                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.app.json"
                    }
                }],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['./src', './node_modules']
    },
    optimization: {
        minimize: false
    }

}