module.exports = function (grunt) {

    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            root: '../',
            resources: '<%= paths.root %>Resources/',
            sass: '<%= paths.resources %>Public/Sass/',
            css: '<%= paths.resources %>Public/Css/',
            fonts: '<%= paths.resources %>Public/Fonts/',
            ts: '<%= paths.resources %>Public/ts/',
            js: '<%= paths.resources %>Public/Js/'
        },

        uglify: {
            all: {
                options: {
                    compress: true,
                },
                files: {
                    "<%= paths.js %>/Dist/main.min.js": [
                        "<%= paths.js %>/Src/**/*.js"
                    ]
                }
            }
        },

        sass: {
            options: {
                style: 'compressed',
                sourceMap: false
            },
            layout: {
                files: {
                    '<%= paths.css %>styles.css': '<%= paths.sass %>styles.scss'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '<%= paths.resources %>/Public/',
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: '<%= paths.sass %>**/*.scss',
                tasks: ['sass']
            },
            scripts: {
                files: '<%= paths.js %>**/*.js',
                tasks: ['scripts']
            }
        }
    });

    /**
     * Register tasks
    //  */
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    /**
     * Grunt update task
     */
    grunt.registerTask('scripts', ['uglify']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', ['dev']);

};
