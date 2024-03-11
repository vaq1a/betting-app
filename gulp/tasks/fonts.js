import {PATHS} from "../configs/index.js";
import gulp from "gulp";

export default function fonts() {
    return gulp.src(PATHS["fonts"].src)
        .pipe(gulp.dest(PATHS["fonts"].dist));
}
