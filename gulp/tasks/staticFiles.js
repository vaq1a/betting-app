import gulp from 'gulp'
import {PATHS} from "../configs/paths.js"
import htmlmin from 'gulp-htmlmin'
import fileInclude from 'gulp-file-include'

export default function staticFiles() {
    return gulp.src(PATHS["staticFiles"].src)
        .pipe(
            fileInclude({
                filters: {
                    prefix: '@@',
                    basepath: '@file',
                },
            })
        )
        .pipe(
            htmlmin({
                collapseWhitespace: true,
            })
        )
        .pipe(gulp.dest(PATHS["main"]))
}
