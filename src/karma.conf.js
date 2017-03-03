//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '../',

    files: [
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './src/app/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: './unit_results/unit.xml',
      suite: 'unit'
    }

  });
};