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
<section>
<img src="${imgURL}" class="card" alt="Image color is extracted from">
        <section class="colorBlocks"></section>
        </section>
`
const searchResultsHTML = `
 <section>
        <p>select a picture:</p>
        <section class="imageroll"></section>
</section>

`
const nasaSearchHTML = `
<section>
        <p>astronomy picture of the day:</p>
        <form id="apodForm">
            <input type="date" name="apodDate" id="apodDate" placeholder="2016-09-29">
            <input type="submit" value="get picture" >
        </form>
       <!-- <div class="linediv"></div>-->
       <p>NASA image library</p>
        <form id="NIVLForm">
            <input type="text" name="nasasearch" id="nasasearch" placeholder="stars, missions, etc." required>
            <input type="submit" value="search">
        </form>
    </section>
`
console.log('data active');
