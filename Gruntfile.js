module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,  
        processors: [
          require('autoprefixer')()
        ]
      },
      dist: {
        src: '*.css'
      }
    },
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['sass:dev']);

};