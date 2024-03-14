import gulp from 'gulp'
import {PATHS} from "../configs/paths.js"
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import autoprefix from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'

const sass = gulpSass(dartSass);

export default function styles() {
    return gulp.src(PATHS["styles"].src)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefix({
            browsers: ["last 2 versions"]
        }))
        .pipe(cleanCSS({
            level: {
                2: {
                    all: false,
                    removeDuplicateRules: true,
                    removeEmpty: true,
                    mergeMedia: true,
                    reduceNonAdjacent: true,
                    mergeAdjacent: true
                }
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(PATHS["styles"].dist))
}
