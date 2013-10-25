var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelLinks = document.querySelectorAll('#show-links a'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        $('#cube').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
          if (panelClassName === "show-left") {
            var offset = $(".project").offset();
            $("html,body").animate({
              scrollTop: offset.top
            });
          }
        });
        box.addClassName( panelClassName );
        $("html, body").animate({
          scrollTop: 0
        }, "slow");
      };

  for (var i=0, len = showPanelLinks.length; i < len; i++) {
    showPanelLinks[i].addEventListener( 'click', onButtonClick, false);
  }

  $('#about-link')[0].addEventListener('click', onButtonClick, false);
};

window.addEventListener( 'DOMContentLoaded', init, false);
