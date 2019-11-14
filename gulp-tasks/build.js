'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const prettier = require('gulp-prettier');
const through2 = require('through2');
const autoprefixer = require('autoprefixer');
const replaceExtension = require('replace-ext');
const { rollup } = require('rollup');
const rollupConfigDev = require('../rollup.config.dev');
const rollupConfigProd = require('../rollup.config.prod');
const babelPluginResourceJSPaths = require('../babel-plugin-resource-js-paths');

const config = require('./config');

const buildProd = process.env.NODE_ENV === config.ENV_PRODUCTION;

module.exports = {
  modules: {
    sass() {
      return gulp
        .src(`${config.srcDir}/**/*.scss`)
        .pipe(
          sass({
            includePaths: ['node_modules'],
            outputStyle: !buildProd ? 'nested' : 'compressed',
          }).on('error', sass.logError)
        )
        .pipe(postcss([autoprefixer()]))
        .pipe(
          through2.obj((file, enc, done) => {
            file.contents = Buffer.from(`
              import { css } from 'lit-element';
              export default css([${JSON.stringify(String(file.contents))}]);
            `);
            file.path = replaceExtension(file.path, '.css.js');
            done(null, file);
          })
        )
        .pipe(prettier())
        .pipe(gulp.dest(path.resolve(config.jsDestDir)));
    },

    scripts() {
      return gulp
        .src([
          `${config.srcDir}/**/*.ts`,
          `!${config.srcDir}/**/*-story*.ts*`,
          `!${config.srcDir}/**/*.d.ts`,
          `!${config.srcDir}/index-with-polyfills.ts`,
        ])
        .pipe(plumber())
        .pipe(gulpif(!buildProd, sourcemaps.init()))
        .pipe(
          babel({
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: ['last 1 version', 'Firefox ESR', 'not opera > 0', 'not android > 0', 'not edge > 0', 'not ie > 0'],
                },
              ],
            ],
            // `version: '7.3.0'` ensures `@babel/plugin-transform-runtime` is applied to decorator helper
            plugins: [['@babel/plugin-transform-runtime', { version: '7.3.0' }], babelPluginResourceJSPaths],
          })
        )
        .pipe(gulpif(!buildProd, sourcemaps.write()))
        .pipe(gulp.dest(config.jsDestDir));
    },
  },

  bundle() {
    const suffix = !buildProd ? '.js' : '.min.js';
    return Promise.all(
      Object.keys(config.bundle).map(moduleName =>
        rollup(
          Object.assign(buildProd ? rollupConfigProd : rollupConfigDev, {
            input: path.join(config.srcDir, config.bundle[moduleName]),
          })
        ).then(bundle =>
          bundle.write({
            format: 'iife',
            moduleName,
            output: {
              name: 'CarbonCustomElements',
              file: path.join(config.destDir, moduleName + suffix),
            },
            sourceMap: true,
          })
        )
      )
    );
  },
};
