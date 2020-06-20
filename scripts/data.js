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
<header><a href="index.html"><img src="images/home.png" alt="main page"></a></header>
<main>
    
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
</main>
<script src="scripts/data.js"></script>
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
<script src="scripts/nasa_search_apod.js"></script>
<script src="scripts/nasa_search_database.js"></script>
<script src="scripts/clarifai.js"></script>

`
const customUploadHTML = `
<header><div><a href="index.html"><img src="images/home.png" alt="main page"></a></div></header>
    <main>
        <section>
        <p>URL</p>
        <form id="customURLForm">
            <input type="text" name="customURL" id="customURL" placeholder="image URL">
            <input type="submit" value="GO">
        </form>
       <!-- <div class="linediv"></div>-->
       <!--
       <p>or</p>
        <form id="customUploadForm" method="POST" action="/images">
            <input type="file" name="customUpload" id="customUpload" accept="image/png, image/jpeg, image/jpg">
            <input type="submit" value="upload">
        </form>
        <p>custom upload is under construction DO NOT TRY TO UPLOAD</p>
        <p>because your machine will explore.</p>
        -->
    </section>
    </main>
    
    <script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
    <script src="scripts/data.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
    <script src="scripts/nasa_search_apod.js"></script>
    <script src="scripts/nasa_search_database.js"></script>
    <script src="scripts/clarifai.js"></script>
    <script src="scripts/custom_upload.js"></script>
`
console.log('data active');
