// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

    let userInput = $("#search-term").val();
    console.log(userInput);

    let apiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=dc6zaTOxFJmzC`
    console.log(apiURL);

        fetch(apiURL)
        .then(function(response) {
          return response.json();
    })
    .then(function(data) {

        let gifURL = data.data[0].images.original.url;
        
        data.data.forEach(function(image){
            $(".text-center").html(`<img src="${image.images.original.url}">`);
        });

        data.data.forEach(function(image){
            console.log(image.images.original.url)
        });

        console.log("hi");
    });
});