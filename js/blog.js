var parent = document.querySelectorAll("#recipemenu");

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

  document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('blogtopics');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('shown')[0].classList.remove('shown');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('topics')[index].classList.add('shown');
  };
});

document.addEventListener('DOMContentLoaded', function(){
// タブに対してクリックイベントを適用
const list = document.getElementsByClassName('changetopics');
for(let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', tabSwitch);
}

// タブをクリックすると実行する関数
function tabSwitch(){
  // タブのclassの値を変更
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  // コンテンツのclassの値を変更
  document.getElementsByClassName('shownlist')[0].classList.remove('shownlist');
  const arrayTabs = Array.prototype.slice.call(list);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('bloglist')[index].classList.add('shownlist');
};
});


const Line = require('./line');
const myLine = new Line();

// LINE Notify トークンセット
myLine.setToken(process.env.QUdjDjU8mhPF5zX4fZD93lCSeXEigA8hKEWTaL0Fy8h);
// LINE Notify 実行（「こんにちは！」とメッセージを送る）
myLine.notify('こんにちは！');
