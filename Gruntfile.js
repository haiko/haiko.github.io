'use strict';


module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-middleman');

    grunt.initConfig({
        middleman: {
            options: {
                useBundle: true
            },
            server: {},
            build: {
                options: {
                    command: "build"
                }
            }
        }
    });

    grunt.registerTask('default', [
    'middleman:server'
  ]);
};