module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          /*compress: true,
          yuicompress: true,*/
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "assets/css/app.min.css": "assets/app-less/app.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/app-less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
        all: {
            // Gets the port from the connect configuration
            path: 'http://localhost:9001/'
        }
    },
    connect: {
        server: {
            options: {
                port: 9001,
                base: '/Workspace/PSD2HTML/kiga'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['connect', 'open', 'watch']);
};