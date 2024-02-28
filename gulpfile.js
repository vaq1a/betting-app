import gulp from 'gulp'
import browserSync from 'browser-sync'
import {
    cleanAll,
    cleanHtml,
    cleanImages,
    cleanStyles,
    styles,
    reload,
    images,
    staticFiles,
    scripts,
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
    watch(PATHS["images"].src, series(cleanImages, images, reload))
    watch(PATHS["staticFiles"].src, series(cleanHtml, staticFiles, scripts, reload))
}

// TODO: add fonts
const development = series(createDir, cleanAll, styles, scripts, images, staticFiles, devServer)
development.displayName = 'dev'
export { development }

const production = series(createDir, cleanAll, styles, scripts, images, staticFiles)
production.displayName = 'prod'
export { production }