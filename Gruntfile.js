module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/main.css': 'css/main.scss'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      },
      combine: {
        files: {
          'css/compiled.min.css': ['dist/css/**/*.min.css']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', '!js/compiled.js', 'js/**/*.js', '!js/domReady.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          window: true
        }
      }
    },
    clean: {
      build: ['dist/', 'css/*.min.css', 'js/*.min.js'],
      min: ['css/main.min.css', 'js/compiled.js'],
      css: ['css/main.min.css']
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.'
        }
      }
    },
    watch: {
      dev: {
        files: ['index.html', 'css/**/*', 'js/**/*', '!css/**/*.min.css', '!js/**/*.min.js'],
        tasks: ['latch']
      }
    }
  });

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Run 'grunt' to minify code and connect to local server
  grunt.registerTask('build',   ['clean:build', 'sass', 'cssmin', 'clean:min']);

  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('latch',   ['build', 'watch']);
};