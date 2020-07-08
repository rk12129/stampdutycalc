module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);    
  
  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'js/main.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    htmlhint: {
      options: {},
      src: [
        'index.html'
      ],
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
       src: ['js/**/*.js'],
       dest: 'js/built.js',
      },
    },

    cssc: {
      csscFirstSet: {
      files: {
        'build/css/main.css': 'css/main.css'
       }
      }
    },

    uglify: {
      build: {
        files: {
          'build/js/built.min.js': ['js/built.js']
        }
      }
    },

    'string-replace': {
      dist: {
        files: {
          'build/index.html': 'index.html'
        },
      options: {
        replacements: [{
          pattern: '<script src="js/main.js"></script>',
          replacement: '<script src="js/built.min.js"></script>'
        },
        { 
          pattern: '<script src="js/autonumeric-1.9.30.js"></script>',
          replacement: ''
       }]
      }
    }
  }


  });

  grunt.registerTask('default', ['jshint', 'htmlhint', 'concat', 'cssc', 'uglify', 'string-replace']);

};