'use strict';

module.exports = {
  lintJS: [
    './gulpfile.js',
    '../src/app/**/*.js'
  ],
  views: {
    src: '../src/app/*.html',
    watch: '../src/app/**/*.html',
    dest: '../dist/'
  },
  hologram: {
    src: '../../config.yml'
  },
  templates: {
    src: '../src/app/**/*.html',
    dest: '../dist/templates/'
  },
  styles: {
    src: '../src/app/**/*.scss',
    watch: [
      '../src/app/**/*.scss',
      '../src/app/**/*.scss'
    ],
    dest: '../dist/css/'
  },
  scripts: {
    src: [
      '../src/app/**/*.js',
      '!../src/app/**/*.spec.js'
    ],
    dest: '../dist/scripts/'
  },
  images: {
    src: [
      '../src/app/assets/**/*.png',
      '../src/app/assets/**/*.jpg'
    ],
    dest: '../dist/imgs'
  },
  icons: {
    src: [
      '../src/app/assets/icons/**/*.png',
      '../src/app/**/*.ico'
    ],
    dest: '../dist/imgs/icons'
  },
  sprites: {
    src: '../src/sprites/*.png',
    dest: '../public/imgs/sprites/'
  },
  docs: {
    js: {
      dest: '../../docs/application'
    }
  },
  deps: {
    styles: {
      ext: 'css',
      concat: 'vendor.css',
      minify: {
        keepSpecialComments: 0
      },
      dest: '../dist/styles'
    },
    scripts: {
      ext: 'js',
      concat: 'vendor.js',
      dest: '../dist/scripts'
    },
    fonts: {
      ext: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
      dest: '../dist/fonts'
    }
  },
  browserSync: require('browser-sync').create()
};
