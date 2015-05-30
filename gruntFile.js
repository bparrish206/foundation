'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      all: ['public/*.js'],
      options: {
        jshintrc:true
      }
    },

    jscs: {
      src: 'public/**/*.js',
      options: {
        config:'.jscsrc'
      }
    },

    clean: {
      src: ['build/']
    },

    copy: {
      dev:{
        cwd:'public/',
        expand:true,
        src: ['**/*.html', 'css/**/*.css'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src:['public/js/**/*.js'],
        dest:'build/bundle.js',
        options: {
          transform:['debowerify']
        }
      }
    }
  });

  grunt.registerTask('build', ['jshint', 'clean', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs']);
};
