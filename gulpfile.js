var gulp  = require('gulp'),
    concat = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files'),
    order = require('gulp-order'),
    filter = require('gulp-filter')
    exec = require('child_process').exec;

// Путь к собранным файлам
var buildPath = "clientApp/build";

// Компоненты bower
var vendorsJsFiles = mainBowerFiles({
  filter:'**/*.js',
    paths: {
        bowerDirectory: 'bower_components'
    }
});
var vendorsCssFiles = mainBowerFiles({
  filter:'**/*.css',
    paths: {
        bowerDirectory: 'bower_components'
    }
});

gulp.task('vendors_js', function(){
  return gulp.src(vendorsJsFiles)
  .pipe(concat('vendors.js'))
  .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('vendors_css', function(){
  return gulp.src(vendorsCssFiles)
  .pipe(concat('vendors.css'))
  .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('crm_js', function(){
  return gulp.src('clientApp/crmApp/**/*.js')
  .pipe(order([
    "**/crmApp.module.js",
    "**/*.js"
  ]))
  .pipe(concat('crm.js'))
  .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('crm_css', function(){
  return gulp.src('clientApp/css/*.css')
  .pipe(concat('crm.css'))
  .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('server', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('watch', function(){
  gulp.watch(vendorsJsFiles, ['vendors_js']);
  gulp.watch(vendorsCssFiles, ['vendors_css']);
  gulp.watch('clientApp/crmApp/**/*.js', ['crm_js']);
  gulp.watch('clientApp/css/*.css', ['crm_css']);
});

// Выполняет сборку
gulp.task('build', ['vendors_js', 'vendors_css', 'crm_js', 'crm_css']);

// Собирает проект, запускае сервер и отслеживает изменения
gulp.task('default', ['build', 'server', 'watch']);
// Альтернативный вызов для запуска сервера и автосборки
gulp.task('serve', ['default']);