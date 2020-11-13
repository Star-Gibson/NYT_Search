
$(document).ready(function () {

   

  $("#searchBtn").on("click", function (event){
    event.preventDefault()
    var searchTerm = $("#searchTerm").val();
    var retrieve =$("#retrieve").val();
    var startYear = $("#startYear").val();
    var endYear =  $("#endYear").val();
      
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm
    +"&api-key=gttQn0E2fvkMmuSgzeFvyJ1uoLQnxgoa";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
       
       var results = response.response.docs;
      
      
      for (var i = 0; i < retrieve; i++) {

      var article = $("<div>");
      var title = $("<h3>");
      title.text(results[i].headline.main);
      var content = $("<p>");
      content.text("Description: " + results[i].abstract)
      var link = $("<a>");
      link.attr("href", results[i].web_url);
      link.text("Link: " + results[i].web_url )

      var year = results[i].pub_date;
      var yearString="";
       
      for(var k = 0; k < 4; k++){
      yearString += year.charAt(k);
      }

      var yearPublished = $("<p>");
      yearPublished.text("Year Published: " + yearString);
      
      $(".articles").append(article);
      article.append(title);
      article.append(yearPublished);
      article.append(content);
      article.append(link);
      }
       
     })
    
    
    });

});