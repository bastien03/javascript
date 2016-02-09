// Karma configuration
// Generated on Wed May 27 2015 19:17:08 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [ 
        'js/**/*.js',
        'spec/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox', 'Chrome'],
    singleRun: false
  });
};
