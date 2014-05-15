module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      main: { 
        files:[
            {expand: true, cwd: "public.src/bower_components/bootstrap/dist", src: ['fonts/**'], dest: 'public/js/vendors/bootstrap'}
          , {expand: true, cwd: "public.src/bower_components/bootstrap/dist/", src: ['js/bootstrap.min.js'], dest: 'public/js/vendors/bootstrap'}
          , {expand: true, cwd: "public.src/bower_components/bootstrap/dist/", src: ['css/bootstrap.min.css'], dest: 'public/js/vendors/bootstrap'}
          , {expand: true, cwd: "public.src/bower_components/bootstrap/dist/", src: ['css/bootstrap-theme.min.css'], dest: 'public/js/vendors/bootstrap'}
          , {expand: true, cwd: "public.src", src: ['js/**'], dest: 'public'}
          , {expand: true, cwd: "public.src/bower_components/jquery/dist/", src: ['jquery.min.js'], dest: 'public/js/vendors'}
          , {expand: true, cwd: "public.src/bower_components/angular/", src: ['angular.min.js'], dest: 'public/js/vendors'}
          , {expand: true, cwd: "public.src/bower_components/angular-resource/", src: ['angular-resource.min.js'], dest: 'public/js/vendors'}
        ]
      },
      index : {
        expand: true, cwd: "public.src", src: ['index.html'], dest: 'public',
        options: {
          process: function (content, path) {
            return content
              .replace(/bower_components/g, "js/vendors")
              .replace(/bootstrap\/dist/g,"bootstrap")
              .replace(/jquery\/dist\//g,"")
              .replace(/angular\//g,"")
              .replace(/angular-resource\//g,"")
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
}

