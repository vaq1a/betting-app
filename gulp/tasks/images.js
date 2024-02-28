import gulp from 'gulp'
import {PATHS} from "../configs/paths.js"
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin'
import webp from 'gulp-webp'

export default function images() {
    return gulp.src(PATHS["images"].src)
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            mozjpeg({
                quality: 75,
                progressive: true
            }),
            optipng({ optimizationLevel: 5 }),
            svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest(PATHS["images"].dist))
        .pipe(webp())
        .pipe(gulp.dest(PATHS["images"].dist))
}
