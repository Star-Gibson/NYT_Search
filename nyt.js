
$(document).ready(function () {

   

  $("#searchBtn").on("click", function (event){
    event.preventDefault()
    var searchTerm = $("#searchTerm").val();
  
      console.log(searchTerm);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm
    + "&api-key=gttQn0E2fvkMmuSgzeFvyJ1uoLQnxgoa";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
       
       var results = response.response.docs;
      

       

      for (var i = 0; i < results.length; i++) {

      var article = $("<div>");
      var title = $("<p>");
      title.text(results[i].abstract);
       
      article.append(title);
      $(".articles").append(article);
        
      }

      
     })
    
    
    });

});