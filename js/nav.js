$(document).ready(function() {
  $('#show-links li').each(function(i,e) {
    $(e).on("click", function(event) {

      if (event.currentTarget !== $('.current')[0]) {
        $('.current').removeClass('current');
        $(event.target);
        $(event.currentTarget).addClass('current');
      }
    });
  });
});
