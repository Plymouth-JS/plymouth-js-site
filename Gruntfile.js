module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'src/ui/css/main.css': 'src/ui/scss/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['src/ui/scss/**/*.scss'],
        tasks: ['sass']
      },
    }

  });


  grunt.registerTask('default', ['sass']);

};
