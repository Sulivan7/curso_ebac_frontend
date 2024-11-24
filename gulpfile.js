const gulp = require ("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Não Consegui Baixar a pasta com as imagens no material de Apoio, então baixar no pixabay como ensinado nas aulas ok :)
function comprimeImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial : false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial : false}, gulp.series(comprimeImages));
    gulp.watch('./source/scripts/*.js', {ignoreInitial : false}, gulp.series(comprimeJavaScript));
}