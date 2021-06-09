var parent = document.querySelectorAll("#menublog");

  var node = Array.prototype.slice.call(parent, 0);

  node.forEach(function (element) {
    element.addEventListener(
      "mouseover",
      function () {
        element.querySelector(".submenu").classList.add("active");
      },
      false
    );
    element.addEventListener(
      "mouseout",
      function () {
        element.querySelector(".submenu").classList.remove("active");
      },
      false
    );
  });

var blogtopics = document.querySelectorAll(".blogtopics")
var topic = Array.prototype.slice.call(parent, 0);

node.forEach(function (element) {
  element.addEventListener(
    "mouseover",
    function () {
      element.querySelector(".blogtopics").classList.add("active");
      element.querySelector(".topic").classList.add("active");
    },
    false
  );
  element.addEventListener(
    "mouseout",
    function () {
      element.querySelector(".blogtopics").classList.remove("active");
      element.querySelector(".topic").classList.remove("active");
    },
    false
  );
});
