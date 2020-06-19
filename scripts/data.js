'use strict'
var currentDate = new Date();
var imgURL;
var imgURLtest = 'https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p2016a-m-2000x1374.png'
const NASAapiKey = '9TpHmhIBMuPkT3Ya2FhC5ovmI8hDZltLw4oT8Des';
var APIres;
var NIVLQuery;
var imgUpload;
var NIVLImageURLList = [];
var databaseImageHTML = `
<img src="" alt="">
`
const palleteHTML = `
<img src="${imgURL}" alt="Image color is extracted from">
        <section class="colorBlocks"></section>
`
const searchResultsHTML = `
 <section>
        <p>select a picture:</p>
        <section class="imageroll"></section>
</section>

`

console.log('data active');
