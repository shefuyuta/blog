$(function(){
  $("#menublog").mouseover(function(){
    $(".submenu").stop().slideDown();
  });
  $("#menublog").mouseout(function(){
    $(".submenu").mouseout(function(){
    $(".submenu").stop().slideUp();
  });
  });
});
