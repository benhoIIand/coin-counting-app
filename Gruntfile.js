module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            all: [
                'Gruntfile.js',
                'js/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/main.css': 'scss/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            }
        },

        karma: {
            options: {
                configFile: 'js/karma.conf.js'
            },
            dev: {
                singleRun: false,
                autoWatch: true
            }
        }

    });

    // Automatically load in all Grunt npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['jshint', 'sass', 'watch']);

};
