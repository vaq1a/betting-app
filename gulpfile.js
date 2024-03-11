import gulp from 'gulp'
import browserSync from 'browser-sync'
import {
    cleanAll,
    cleanHtml,
    cleanImages,
    cleanStyles,
    cleanFonts,
    styles,
    reload,
    images,
    staticFiles,
    scripts,
    fonts,
    createDir
} from './gulp/tasks/index.js'
import {
    PATHS
} from './gulp/configs/index.js'

const { series, watch, src, dest } = gulp

function devServer() {
    browserSync.init({
        server: {
            baseDir: PATHS["main"],
        },
    })

    watch(PATHS["styles"].src, series(cleanStyles, styles, reload))
    watch(PATHS["fonts"].src, series(cleanFonts, fonts, reload))
    watch(PATHS["images"].src, series(cleanImages, images, reload))
    watch(PATHS["staticFiles"].src, series(cleanHtml, staticFiles, scripts, reload))
}

const development = series(createDir, cleanAll, styles, scripts, fonts, images, staticFiles, devServer)
development.displayName = 'dev'
export { development }

const production = series(createDir, cleanAll, styles, scripts, fonts, images, staticFiles)
production.displayName = 'prod'
export { production }