module.exports = function(config) {
    config.set({
        basePath: '',                   // root 경로로 인식할 위치.
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',              // src 경로 내의 파일들만 감시합니다.
            'karma.debug.js'            // 최초 실행시 자동으로 debug.html을 열어줍니다.
        ],
        exclude: ['node_modules'],
        reporters: ['kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,                // 파일변환 감시하여 karma 재구동 (debug.html은 새로고침이 필요합니다..)
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
}
