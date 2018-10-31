var athletes = ["Scottie Pippen", 
              "B.J Armstrong", 
              "Bill Cartwright", 
              "Luke Longley", 
              "Horace Grant", 
              "Steve Kerr", 
              "John Paxton", 
              "Michael Jordan",
              "Will Perdue",
              "Dennis Rodman",
              "Toni Kukoc",
              "Derrick Rose",
              "Joakim Noah",
              "Jimmy Butler",
              "Ben Gordon",
              "Carlos booser",
              "Luol Deng",
              "Taj Gibson",
              "Phill Jackson",
              "Tom Thibodeau"];

          
              getGiphy();




 function getGiphy(){
 $("#buttonContainer").on("click", function() {

 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athletes + "&api_key=gQ4igNIvK0bFHvaUeM0uiQj04piZpaDn&limit=10&rating=G"
          
                 $.ajax({
                   url: queryURL,
                   method: "GET"
                 })
                
                   .then(function(response) {
                    var imageUrl = response.data[0].images.original.url;
                    var athletesImg = $("<img>");
          
                     athletesImg.attr("src", imageUrl);
                     athletesImg.attr("alt", "athlete image");
                         $(".gifContainer").prepend(athletesImg);
                 });
               });
  }





//function addButton() {
  //$("#buttonContainer").empty();
  //for (var i = 0; i < athletes.length; i++) {
   // var button = $("<button>");
   // athletes.addClass("players");
   // athletes.attr("data-people", athletes[i]);
   // athletes.text(athletes[i]);
   // $("#buttonContainer").append(athletes);
 // }
//}


          

