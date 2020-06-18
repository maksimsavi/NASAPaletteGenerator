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
      
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAapiKey}&date=${currentDate}`, requestOptions)
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
            evaluateData(result)
        )
        .catch(error => alert(error));
}
function evaluateData (result) {
    if (result.media_type != 'image') {
        alert('Today\'s file is not an image. Please search through the database instead.');
    } else {
        imgURL = result.url;
        $(loadResults(imgURL));
    }
}
function getToday (){
    // create var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentDate.getFullYear();
    currentDate = yyyy + '-' + mm + '-' + dd;
}

function runSearch () {
    getToday();
    apodFormSubmitHandler();
}
$(runSearch());

//i will have to structure everything so that I dont have to run a server.
// that means main page doesn't need data so it won't load it, however 
// other pages will. like NASA SEARCH and CUSTOM will be entry points, 
// and load content asynchronously.