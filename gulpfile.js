var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('watch', function () {
   gulp.watch('./**/*.cs', ['test']);
}); 

gulp.task('test', function() {  
    exec('dnx . test',
    {timeout: 8000, killSignal: 'SIGTERM',} ,
        function (err, stdout, stderr) {
            console.log(stdout);        
            console.log(stderr);
        }
    );  
});