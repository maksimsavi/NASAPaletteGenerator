'use strict'
function apodFormSubmitHandler () {
    $( "#NIVLForm" ).submit(function( event ) {
        event.preventDefault();
        NIVLQuery = encodeURI($( "input[name=nasasearch]" ).val());
        fetchNIVL(NIVLQuery);
        console.log('nivl form caught, result: '+NIVLQuery);
      });
}
function fetchNIVL (NI) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://images-api.nasa.gov/search?q=${NIVLQuery}&media_type=image&page=1`, requestOptions)
        .then(res => {
            if (!res.ok) {
                return res.json()
                .then(json => {
                    throw new Error(json.error.message);
                });
            }
            return res.json();
          })
        .then(result => 
            //console.log(result.collection.items)
            extractNIVLImages(result.collection.items)
        )
        .catch(error => alert(error));
}

function extractNIVLImages (resultArray) {
    NIVLImageURLList = [];
    if (resultArray[1] === undefined) {
        
        console.log(NIVLImageURLList)
    } else {
        resultArray.forEach(element => {
            NIVLImageURLList.push(element.links[0].href)
        });
        console.log('image urls extracted, result: ');
        console.log(NIVLImageURLList[0]);
        loadNIVLResults(NIVLImageURLList);
    }
    
}
//later on, add image title from database to alt
function loadNIVLResults(array) {
    $('main').html(searchResultsHTML);
    array.forEach(element => {
        $('.imageroll').append(`<img src="${element}" id="imageToProcess" alt="Image from search results">`);
    });
}

//tracking image click
function selectImage() {
    $('main').on('click', '#imageToProcess', function(){
        imgURL = $(this).attr('src');
        console.log($(this).attr('src'));
        loadResults(imgURL);
    });
}

function runItUp(){
    $(apodFormSubmitHandler());
    $(selectImage());
}
runItUp();