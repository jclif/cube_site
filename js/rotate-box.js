var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelLinks = document.querySelectorAll('#show-links a'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
        $("html, body").animate({ scrollTop: 0 }, "slow");
      };

  for (var i=0, len = showPanelLinks.length; i < len; i++) {
    showPanelLinks[i].addEventListener( 'click', onButtonClick, false);
  }

  $('#about-link')[0].addEventListener('click', onButtonClick, false);
};

window.addEventListener( 'DOMContentLoaded', init, false);
var windowWidth = $(window).width()
