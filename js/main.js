
$(function () {

    $('#search').click(function (event) {

        event.preventDefault();
        $('.grid-container').empty();

        var keyword = $('#keyword').val();
        var count = $('#gifnumber').val();

        if (keyword == null || keyword == "") {
            alert("Enter a keyword to continue..");
        }
        if (keyword.length > 0) {
            if (count == null || count == "" || count < 1) {
                count = 1;
                alert("You entered a count less than 1, the default count of 1 will be used...")
            }
        }

        if (count > 60) {
            alert("You entered a number greater than 60, only 60 images will be diplayed...")
            count = 60;
        }

        var api_key = "ApvlAJSFKecV5nbL7Jdu7BIdSFUj2CPR";
        var myUrl = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${api_key}&limit=${count}`;

        $.get(myUrl).done(function (response) {
            console.log(response);

            for (var i = 0; i < response.data.length; i++) {
                var imageURL = '"' + response.data[i].images.preview_webp.url + '"';
                $('.grid-container').append(`<html><img id="grid-img" src=${imageURL}</html>`);
            }

        });


    });

});