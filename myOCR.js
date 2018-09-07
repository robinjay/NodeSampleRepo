var Tesseract = require('tesseract.js')
var filename = 'SampleInv.tif'
 
Tesseract.recognize(filename)
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
    console.log(result.text)
    process.exit(0)
  })