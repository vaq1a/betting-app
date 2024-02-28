import gulp from 'gulp'
import {PATHS} from "../configs/paths.js"
import clean from "gulp-clean"

export function cleanAll() {
    return gulp.src(PATHS["main"]).pipe(clean({read: false}))
}

export function cleanStyles() {
    return gulp.src(PATHS["styles"].dist).pipe(clean({read: false}))
}

export function cleanHtml() {
    return gulp.src(PATHS["staticFiles"].dist).pipe(clean({read: false}))
}

export function cleanImages() {
    return gulp.src(PATHS["images"].dist).pipe(clean({read: false}))
}
