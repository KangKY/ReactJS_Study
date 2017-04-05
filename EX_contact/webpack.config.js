var webpack = require('webpack');

module.exports = {
  // webpack을 통한 모듈화를 진행하기위한 입구
    entry: './src/index.js',

// 합친 파일들을 output 정보에 저장
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    // 개발 서버 환경 설정
    devServer: {
        hot: true,// 파일 수정될 때마다 리로딩
        inline: true,// 핫리로딩에서 필요한 웹팩데브서버의 클라이언트를 번들에 같이 넣어주는 것
        host: '0.0.0.0',// 서버를 리슨할 주소(로컬호스트의 경우 외부에서 접근 ㄴㄴ)
        port: 4000,
        contentBase: __dirname + '/public/',// index 파일의 위치
    },

    // Webpack의 또 다른 기능
        // loader를 통해 es6를 변환하던가, JSX를 변환하는 등의 기능
        // react-hot-loader를 먼저 탐색함.
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
