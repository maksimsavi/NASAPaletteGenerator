//const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '3bc37bbea6574f2fa1de55b8d627a174'
});


function getColors () {
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", imgURL).then(
    function(response) {
        APIres = response.outputs[0].data.colors;
        console.log(APIres);
        loadResults();
        APIres.forEach(element => writeColorBlock(element));
    },
    function(err) {
      console.log(err);
      alert(`This link didn't work. Make sure you copy a direct link to an image.`)
    }
  );
}
function writeColorBlock(element) {
    console.log(element.raw_hex);
    $( ".colorBlocks" ).append( `<div style="background-color: ${element.raw_hex}" class="colorBlock"><div class="highlight">${element.raw_hex}</div></div>` );
}

function loadResults() {
  console.log('url fetch: success. result: '+imgURL);
  $( "main" ).empty();
  $( "main" ).html(
    `
<section>    
<img src="${imgURL}" class="card" alt="Image color is extracted from">
        <section class="colorBlocks"></section>
</section>
        `
  );
//getColors();
}
