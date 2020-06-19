'use strict'
function customFormSubmitHandler () {
    $( "#customURLForm" ).submit(function( event ) {
        event.preventDefault();
        imgURL = $( "input[name=customURL]" ).val();
        console.log(customURL);
        loadResults(customURL);
      });
}

function customFormSubmitHandler () {
    $( "#customUploadForm" ).submit(function( event ) {
        event.preventDefault();
        imgUpload = $( "input[name=customUpload]" ).val();
        console.log(imgUpload);
       // loadResults(customURL);
      });
}

function runItUp(){
    customFormSubmitHandler();
    
}
$(runItUp());