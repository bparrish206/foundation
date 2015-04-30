'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

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
    }
  });

  grunt.registerTask('build', ['jshint', 'clean', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs']);
};
