var projects = ["cn", "nnk", "pt"];

var data = {
  "cn": {
    name: "Chessnuts",
    description: "A social chess web application",
    source: "https://github.com/jclif/ChessApplication",
    link: "http://chess.jaredcraigclifton.com"
  },

  "nnk": {
    name: "Ninety-nine Cats",
    description: "A web application for those who want all the perks of cat ownership, without the messy upkeep. Rent your next cat with Ninety-nine cats.",
    source: "https://github.com/jclif/ninety-nine-cats",
    link: "#cats-on-heroku"
  },

  "pt": {
    name: "Ninety-nine Cats",
    description: "A web application for tagging photos of friends.",
    source: "https://github.com/jclif/photo-tagger",
    link: "#photos-on-heroku"
  }
};

var active = projects[0];
var index = 0;

$('.next').on("click", function() {
  if (++index > projects.length-1) index = 0;
  active = projects[index];

  $('.project-title').html(data[active].name);
  $('.project-description').html(data[active].description);
  $('.project-source').attr("href", data[active].source);

  var snake = new Game.SnakeUI(45);
  snake.start(callback);
});
