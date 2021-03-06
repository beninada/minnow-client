module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        seperator: ';'
      },
      prod: {
        src: ['js/**/*.js'],
        dest: 'dist/js/compiled.js'
      },
      dev: {
        src: ['js/**/*.js'],
        dest: 'dist/js/compiled.min.js'
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: false
      },
      prod: {
        files: {
          'dist/js/compiled.min.js': ['dist/js/compiled.js']
        }
      }
    },
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
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      },
      combine: {
        files: {
          'dist/css/compiled.min.css': ['dist/css/**/*.min.css']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
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
      build: ['dist', 'css/*.min.css', 'js/*.min.js'],
      min: ['dist/css/main.min.css', 'dist/js/compiled.js'],
      css: ['dist/css/main.min.css']
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

  // Load plugins required for project.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Run 'grunt' to minify code and connect to local server
  grunt.registerTask('lint',    ['jshint']);
  grunt.registerTask('minify',  ['concat:prod', 'cssmin', 'uglify:prod']);
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('build',   ['clean:build', 'lint', 'compile', 'minify', 'clean:min']);

  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('latch',   ['build', 'watch']);

  // Run 'grunt dev' to concat code and connect to local server
  grunt.registerTask('minify-dev', ['concat:dev', 'cssmin']);
  grunt.registerTask('build-dev', ['clean:build', 'lint', 'compile', 'minify-dev', 'clean:css']);
  grunt.registerTask('dev', ['build-dev', 'connect', 'watch']);

};