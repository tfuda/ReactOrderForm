var gulp = require('gulp');
var webpack = require('webpack-stream');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');

gulp.task('zip', function(){
    return gulp.src('dist/*.js')
        .pipe(zip('ReactOrderForm.resource'))
        .pipe(gulp.dest('sfdc-dist/staticresources/'))

});

gulp.task('deploy', ['zip'], function(){
    return gulp.src('./sfdc-dist/**', { base: "." })
        .pipe(zip('package.zip'))
        .pipe(forceDeploy({
            username:'sfptdev.angular2.tom@patrontechnology.com',
            password:'7thAvenue2TokSSV2cNmHYR3R3NUuQUJt',
            loginUrl:'https://login.salesforce.com',
            version:'36.0'
        }))
});
