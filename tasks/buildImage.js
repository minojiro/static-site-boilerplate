const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const path = require('path')
const srcDir = process.argv[2]
const distDir = process.argv[3]

imagemin([path.join(srcDir, '/**/*')], {
  plugins: [
    imageminMozjpeg({
      quality: 80
    }),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: output => output.replace(new RegExp(srcDir, 'i'), distDir),
}).then(files => files.forEach(file => console.log('ok: ', file.path)));
