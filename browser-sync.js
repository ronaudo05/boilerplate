var browserSync = require('browser-sync');

browserSync({
  files: ['dist/css/*.css', 'dist/js/*.js', 'dist/**/*.html'],
  server: {
    baseDir: 'dist/'
  }
});
