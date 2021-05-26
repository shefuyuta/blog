$(function(){
  $(".hassub").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
  });
  $(".hassub").mouseout(function(){
    $(".submenu").stop().slideUp();
  });
});
