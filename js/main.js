//Show pop-up on hover
// $(function () {
//     $("#linkedin").tooltip({
//         show: {
//             effect: "slideDown",
//             delay: 300
//         }
//     });
// });
// $(function () {
//     $("#gitHub").tooltip({
//         show: {
//             effect: "slideDown",
//             delay: 300
//         }
//     });
// });
// $(function () {
//     $("#emailMe").tooltip({
//         show: {
//             effect: "slideDown",
//             delay: 300
//         }
//     });
// });

$(function () {

    $('#search').click(function (event) {
        
        var keyword = $('#keyword').val();
        var count = $('#gifnumber').val();
        var api_key = "ApvlAJSFKecV5nbL7Jdu7BIdSFUj2CPR";

        var myUrl = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key="+ api_key + "&limit=" + count;
        alert("URL = " + myUrl);

        $.ajax({
            url: myUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log('succes: ' + data);
                alert('succes: ' + data);
            }
            
        }); 
    });
    
});