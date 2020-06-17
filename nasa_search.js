'use strict'
function apodFormSubmitHandler () {
    $( "#apodForm" ).submit(function( event ) {
        event.preventDefault();
        fetchAPOD();
      });
}
function fetchAPOD () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://api.nasa.gov/planetary/apod?api_key=9TpHmhIBMuPkT3Ya2FhC5ovmI8hDZltLw4oT8Des&date=${currentDate}`, requestOptions)
        .then(res => {
            if (!res.ok) {
                return res.json().then(json => {
                    throw new Error(json.error.message);
                });
            }
            return res.json();
          })
        .then(result => 
            evaluateData(result)
        )
        .catch(error => console.log(error));
}
function evaluateData (result) {
    if (result.media_type != 'image') {
        alert('Today\'s file is not an image. Please search through the database instead.');
    } else {
        imgURL = result.url;
        loadResults();
    }
}
function getToday (){
    // create var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentDate.getFullYear();
    currentDate = yyyy + '-' + mm + '-' + dd;
}
function loadResults() {
    $( "main" ).load( "index.html main" );
}
function runSearch () {
    getToday();
    apodFormSubmitHandler();
}
runSearch();

