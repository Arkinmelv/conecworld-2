var gulp = require('gulp'),
    less = require('gulp-less'),
    inject = require('gulp-inject'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload');
 
gulp.task('less', function(done) {
  gulp.src('./src/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
    // .pipe(livereload());

    done();
});

gulp.task('css', function(done){
	gulp.src('./src/css/*')
	.pipe(less())
	.pipe(gulp.dest('./dist/css/'));

	gulp.src('./src/css/**/*')
	.pipe(gulp.dest('./dist/css/'));

	done();
});

gulp.task('js', function(done){
	gulp.src('./src/js/*')
	.pipe(gulp.dest('./dist/js/'));

	done();
});

gulp.task('images', function(done){
	gulp.src('./src/img/*')
	.pipe(gulp.dest('./dist/img/'));

	done();
});

gulp.task('fonts', function(done){
	gulp.src('./src/fonts/*')
	.pipe(gulp.dest('./dist/fonts/'));

	done();
});

gulp.task('html', function(done){
	gulp.src('./src/html/*')
	.pipe(gulp.dest('./dist/'));

	done();
});

gulp.task('clean', function(done){
	return gulp.src('./dist', 
		{
			read: false,
			allowEmpty: true
		})
        .pipe(clean());
});

gulp.task('combine', function(done){
	gulp.src('./src/*.html')
	.pipe(inject(gulp.src(['./src/partials/header.html']), {
		starttag: '<!-- inject:header -->',
		transform: function (filePath, file) {
		  // return file contents as string
		  return file.contents.toString('utf8')
		}
	}))
	.pipe(inject(gulp.src(['./src/partials/header_fixed.html']), {
		starttag: '<!-- inject:header:fixed -->',
		transform: function (filePath, file) {
		  // return file contents as string
		  return file.contents.toString('utf8')
		}
	}))
	.pipe(inject(gulp.src(['./src/partials/footer.html']), {
		starttag: '<!-- inject:footer -->',
		transform: function (filePath, file) {
		  // return file contents as string
		  return file.contents.toString('utf8')
		}
	}))
	.pipe(gulp.dest('./dist'));

	done();
});

gulp.task('watch', function() {
	gulp.watch('./src/img/*', gulp.series('images'));
	gulp.watch('./src/fonts/*', gulp.series('fonts'));
	gulp.watch('./src/js/*', gulp.series('js'));
    gulp.watch('./src/css/*', gulp.series('css'));
    // gulp.watch('./src/css/*.less', gulp.series('less'));
    gulp.watch('./src/*.html', gulp.series('combine','html'));
    gulp.watch('./src/partials/*.html', gulp.series('combine'));
});

// gulp.task('assets', gulp.series('css', 'less', 'js', 'images', 'fonts'));
gulp.task('assets', gulp.series('css', 'js', 'images', 'fonts'));
gulp.task('build', gulp.series('clean', 'assets', 'html', 'combine'));
gulp.task('default', gulp.series('build', 'watch'));