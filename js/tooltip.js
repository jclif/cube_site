$(function() {
  $openevent = $("#open-event");

  $openevent.attr("title", "Click to copy email");
  $openevent.tooltip({
    show: {
      delay: 30
    },
    position: {
      my: "left",
      at: "left-140"
    },
    hide: {
      delay: 30
    }
  });

  $("#open-event").on("click", function(event) {
    // OBFUSCATION!!!
    coded = "dvVAfFVvGcFNGBls0@c9vGN.Fs9";
    key = "BA5Wi3SydTUEvbDKk0xH6NhorOcwmt1G8QJfeIz7YRCjXPua2qsVnFL9lpM4Zg";
    shift = coded.length;
    link="";
    for (i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i);
        link += (ltr);
      } else {
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
        link += (key.charAt(ltr));
      }
    }
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", link);
  });

  $soundcloud = $(".soundcloud-wrapper");

  $soundcloud.attr("title", "Special thanks to ma boi Austin for this sick beat. Follow the link to check out his stuff and show him some love");
  $soundcloud.tooltip({
    show: {
      delay: 30
    },
    position: {
      my: "left top",
      at: "left-25 top+100"
    },
    hide: {
      delay: 30
    }
  });

});
