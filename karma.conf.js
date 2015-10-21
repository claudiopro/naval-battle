// Karma configuration
// Generated on Fri Sep 04 2015 11:20:57 GMT+0100 (IST)
module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		plugins: [
			'karma-chrome-launcher'
      , 'karma-jasmine'
			, 'karma-commonjs'
		],


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			'jasmine'
			, 'commonjs'
		],


		// list of files / patterns to load in the browser
		files: [
			'*.js'
			, './test/*.spec.js'
		],


		// list of files to exclude
		exclude: [
      'index.js'
    ],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'*.js' : [/*'coverage',*/ 'commonjs']
			, './test/*.spec.js' : ['commonjs']
		},

		// coverageReporter: {
		// 	type : 'cobertura'
		// 	, dir : '../coverage'
		// },

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			'progress'
			// , 'coverage'
			// , 'junit'
		],

		// junitReporter: {
		// 	outputDir: '../test_results'
		// },


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			'Chrome'
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}
