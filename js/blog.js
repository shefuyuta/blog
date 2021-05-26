
var parent = document.querySelectorid("#menublog");
var node = Array.prototype.slice.call(parent,0);
  node.forEach(function (element) {
      element.addEventListener(
        "mouseover",
        function() {
          element.querySelector(".menu").classList.add("active");
        },
        false
      );
      element.addEventListener(
      "mouseout",
      function () {
      element.querySelector(".menu").classList.remove("active");
    },
    false
  );
});
