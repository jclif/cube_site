$(document).ready(function() {
  var winSize = $(window).width();
  console.log(winSize);

  var $container = $(".container");
  $container.css("width", winSize);
  $container.css("height", winSize);
  $container.css("-webkit-perspective", winSize);
  $container.css("-moz-perspective", winSize);
  $container.css("-o-perspective", winSize);
  $container.css("perspective", winSize);

  var $cube = $("#cube");

  $cube.css("width", winSize);
  $cube.css("height", winSize);

  var $cubefigure = $("#cube figure");
  $cubefigure.css("width", winSize);
  $cubefigure.css("height", winSize);

  var $cubefront = $("#cube .front");
  $cubefront.css("-webkit-transform", "translateZ( " + (winSize/2) + "px )");
  $cubefront.css("-moz-transform", "translateZ( " + (winSize/2) + "px )");
  $cubefront.css("-o-transform", "translateZ( " + (winSize/2) + "px )");
  $cubefront.css("transform", "translateZ( " + (winSize/2) + "px )");

  var $cubeback = $("#cube .back");
  $cubeback.css("-webkit-transform", "rotateX( -180deg ) translateZ( " + (winSize/2) + "px )");
  $cubeback.css("-moz-transform", "rotateX( -180deg ) translateZ( " + (winSize/2) + "px )");
  $cubeback.css("-o-transform", "rotateX( -180deg ) translateZ( " + (winSize/2) + "px )");
  $cubeback.css("transform", "rotateX( -180deg ) translateZ( " + (winSize/2) + "px )");

  var $cuberight = $("#cube .right");
  $cuberight.css("-webkit-transform", "rotateY( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cuberight.css("-moz-transform", "rotateY( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cuberight.css("-o-transform", "rotateY( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cuberight.css("transform", "rotateY( 90deg ) translateZ( " + (winSize/2) + "px )");

  var $cubeleft = $("#cube .left");
  $cubeleft.css("-webkit-transform", "rotateY( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubeleft.css("-moz-transform", "rotateY( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubeleft.css("-o-transform", "rotateY( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubeleft.css("transform", "rotateY( -90deg ) translateZ( " + (winSize/2) + "px )");

  var $cubetop = $("#cube .top");
  $cubetop.css("-webkit-transform", "rotateX( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cubetop.css("-moz-transform", "rotateX( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cubetop.css("-o-transform", "rotateX( 90deg ) translateZ( " + (winSize/2) + "px )");
  $cubetop.css("transform", "rotateX( 90deg ) translateZ( " + (winSize/2) + "px )");

  var $cubebottom = $("#cube .bottom");
  $cubebottom.css("-webkit-transform", "rotateX( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubebottom.css("-moz-transform", "rotateX( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubebottom.css("-o-transform", "rotateX( -90deg ) translateZ( " + (winSize/2) + "px )");
  $cubebottom.css("transform", "rotateX( -90deg ) translateZ( " + (winSize/2) + "px )");

  var $cubeshowfront = $("#cube .show-front");
  $cubeshowfront.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1) + "px )");
  $cubeshowfront.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px )");
  $cubeshowfront.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px )");
  $cubeshowfront.css("transform", "translateZ( " + ((winSize/2) * -1) + "px )");

  var $cubeshowback = $("#cube .show-back");
  $cubeshowback.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1)+ "px ) rotateX( -180deg )");
  $cubeshowback.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -180deg )");
  $cubeshowback.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -180deg )");
  $cubeshowback.css("transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -180deg )");

  var $cubeshowright = $("#cube .show-right");
  $cubeshowright.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( -90deg )");
  $cubeshowright.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( -90deg )");
  $cubeshowright.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( -90deg )");
  $cubeshowright.css("transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( -90deg )");

  var $cubeshowleft = $("#cube .show-left");
  $cubeshowleft.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( 90deg )");
  $cubeshowleft.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( 90deg )");
  $cubeshowleft.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( 90deg )");
  $cubeshowleft.css("transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateY( 90deg )");

  var $cubeshowtop = $("#cube .show-top");
  $cubeshowtop.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -90deg )");
  $cubeshowtop.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -90deg )");
  $cubeshowtop.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -90deg )");
  $cubeshowtop.css("transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( -90deg )");
  
  var $cubeshowbottom = $("#cube .show-bottom");
  $cubeshowbottom.css("-webkit-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( 90deg )");
  $cubeshowbottom.css("-moz-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( 90deg )");
  $cubeshowbottom.css("-o-transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( 90deg )");
  $cubeshowbottom.css("transform", "translateZ( " + ((winSize/2) * -1) + "px ) rotateX( 90deg )");
});
