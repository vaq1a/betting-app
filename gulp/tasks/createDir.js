import gulp from 'gulp'
import shell from "gulp-shell"

export default function createDir() {
    return gulp.src('*', { read: false }).pipe(shell(['mkdir -p dist']))
}
