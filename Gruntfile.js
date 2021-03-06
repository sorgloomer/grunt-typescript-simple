/*
 * grunt-typescript-simple
 * https://github.com/sorgloomer/grunt-typescript-simple
 *
 * Copyright (c) 2016 Tamas Hegedus
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    typescript_simple: {
      default_options: {
        options: {
          outDir: "tmp/test/default_options",
        },
        files: [{ src: "test/fixtures/good.ts", expand: true }]
      },
      
      custom_options: {
        options: {
          outFile: "tmp/test/custom_options.js",
          typescript: require("typescript"),
          target: "es5",
          module: "amd",
          strictNullChecks: true,
          noImplicitAny: true
        },
        files: [{ src: "test/fixtures/good.ts", expand: true }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'typescript_simple', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
