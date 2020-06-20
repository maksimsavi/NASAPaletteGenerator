function loadNASASearch() {
    $('html').on('click', '#NASASearchBtn', function(){
        $('body').html(nasaSearchHTML);
    });
}

function loadCustom() {
    $('main').on('click', '#customLoadBtn', function(){
        $('body').html(customUploadHTML);
    });
}

function runnethItUp () {
    loadNASASearch();
    loadCustom();
}
$(runnethItUp());