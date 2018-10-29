var topics = ["Scottie Pippen", 
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
              "Tom Thibodeau"]
              
              
              
              $("#scottie-button").on("click", function() {

              var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=gQ4igNIvK0bFHvaUeM0uiQj04piZpaDn&limit=10&rating=G";
          
                $.ajax({
                  url: queryURL,
                  method: "GET"
                })
          
                  .then(function(response) {
          
                    var imageUrl = data.type;
                    var athletesImg = $("<img>");
          
                    athletesImg.attr("src", imageUrl);
                    athletesImg.attr("alt", "athlete image");
          
                    $("#images").prepend(athletesImg);
                  });
              });
          

