var app = {
    nyTimesArticles: [],
  
    initialize: function () {
      app.getNYTimesData();
    },

    makeHTML: function () {
        var theHTML = '';
        for (var i = 0; i < app.nyTimesArticles.length; i++) {
          theHTML += "<div class='nytArticle'>";
          theHTML += '<img src ="' + app.nyTimesArticles[i].multimedia[0].url + '"></img>';
          theHTML += '<h3>' + app.nyTimesArticles[i].title + '</h3>';
          theHTML += '</div>';
        }
        $('.container').html(theHTML);
      },

    getNYTimesData: function () {
      console.log('Get NY Times Data');
      var currentSection = 'arts';
      var nyTimesURL =
        `https://api.nytimes.com/svc/topstories/v2/${currentSection}.json?api-key=`;
      var myNYKey = 'yDQWy1gEtPsXB69LCeGXwGHNRXpP072t';
      var nyTimesReqURL = nyTimesURL + myNYKey;
      console.log(nyTimesReqURL);
      
      fetch(nyTimesReqURL)
        .then(response => response.json())
        .then(data => {
            app.nyTimesArticles = data.results;
            app.makeHTML();
        })
    },

  };
