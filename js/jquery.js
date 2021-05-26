$(function(){
  $("#menublog").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
  });
  $("#menublog").mouseout(function(){
    $(".submenu").stop().slideUp();
    subHeight = $(this).children(".submenu").height();
    $(".submenu").removeClass("active");
    if( subHeight <= 0 ){
      $(this).children(".submenu").addClass("active");
    }else{
      $(this).children(".submenu").removeClass("active");
    }
  });
});
