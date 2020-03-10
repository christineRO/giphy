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
            
    $(".gifResults").append(`<img src="${gifURL}">`);
    
    console.log(gifURL);

    console.log("hi");
});
});