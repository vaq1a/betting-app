import gulp from 'gulp'
import {PATHS} from "../configs/paths.js"
import concat from 'gulp-concat'

export default function scripts() {
    return gulp.src(PATHS["scripts"].src)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(PATHS["scripts"].dist))
}
