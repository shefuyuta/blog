
var parent = document.querySelectorId("#menublog");
var node = Array.prototype.slice.call(".submenu",0);
  node.forEach(function (element) {
      element.addEventListener(
        "mouseover",
        function() {
          element.querySelector("#menublog").classList.add("active");
        },
        false
      );
      element.addEventListener(
      "mouseout",
      function () {
      element.querySelector("#menublog").classList.remove("active");
    },
    false
  );
});
