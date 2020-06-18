//const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '3bc37bbea6574f2fa1de55b8d627a174'
});


function getColors () {
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", imgURL).then(
    function(response) {
        APIres = response.outputs[0].data.colors;
        console.log(APIres);
        APIres.forEach(element => writeColorBlock(element));
    },
    function(err) {
      console.log(err)
    }
  );
}
function writeColorBlock(element) {
    console.log(element.raw_hex);
    $( ".colorBlocks" ).append( `<div style="background-color: ${element.raw_hex}">${element.raw_hex}</div>` );
}

function loadResults() {
  console.log('url fetch: success. result: '+imgURL);
  $( "main" ).empty();
  $( "main" ).html(palleteHTML);
  getColors();
}
