$( document ).ready(function() {
  // Scroll Karma
  var scrollToProjects = function() {
    var offset = $(".snake-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 45
    });
  };

  var projects = ["cn", "zil", "nnk"];

  var data = {
    "cn": {
      name: "Chessnuts",
      description: "A social chess web application",
      source: "https://github.com/jclif/ChessApplication",
      link: "http://chess.jaredcraigclifton.com",
      image: "../img/chessnuts.png"
    },

    "zil": {
      name: "Zillookalike",
      description: "A web applicaton with the scandelous aspiration of becoming rightfully called a zillow clone.",
      source: "https://github.com/jclif/zillow-clone",
      link: "#zillow-on-heroku",
      image: "../img/zillow.png"
    },

    "nnk": {
      name: "Ninety-nine Cats",
      description: "A web application for those who want all the perks of cat ownership, without the messy upkeep. Rent your next cat with Ninety-nine cats.",
      source: "https://github.com/jclif/ninety-nine-cats",
      link: "#cats-on-heroku",
      image: "../img/99cats.png"
    }
  };

  var active = projects[0];
  var index = 0;

  $('.projects').on("click", ".next", function() {
    if (++index > projects.length-1) {
      index = 0;
    }
    active = projects[index];

    $('.project-name').html(data[active].name);
    $('.project-description').html(data[active].description);
    $('.project-source').attr("href", data[active].source);
    $('.project-link').attr("href", data[active].link);
    console.log(data[active].image);
    $('.project-image').attr("src", data[active].image);
  });

  $('.projects').on("click", ".prev", function() {
    if (--index < 0) {
      index = projects.length - 1;
    }
    active = projects[index];

    $('.project-name').html(data[active].name);
    $('.project-description').html(data[active].description);
    $('.project-source').attr("href", data[active].source);
    $('.project-link').attr("href", data[active].link);
    console.log(data[active].image);
    $('.project-image').attr("src", data[active].image);
  });
});
