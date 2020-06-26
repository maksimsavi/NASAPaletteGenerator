'use strict'
function customURLFormSubmitHandler () {
    //listens for the click on main page
    $('html').on('submit', '#customURLForm', function( event ) {
        event.preventDefault();
        imgURL = $( "input[name=customURL]" ).val();
        console.log(imgURL);
        getColors(imgURL);
      });
}

function customUploadFormSubmitHandler () {
    //this one is for an upload feature which is under construction
    $('html').on('submit', '#uploadForm', function( event ) {
        event.preventDefault();
        imgURL = $( "input[name=customUpload]" ).val();
        console.log(customURL);
        getColors(imgURL);
      });
}


function runItUp(){
    customURLFormSubmitHandler();
    //customUploadFormSubmitHandler();
}
$(runItUp());

//!!!!!!!!!!!
//write function that checks if link ends in an acceptable file format (.jpg, png, etc.)