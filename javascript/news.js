// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("contact-mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 3000);
// }


$(document).ready(function () {
  ("use strict");

  var index = 0;

  const changeEvent = () => {
    var elements = document.getElementsByClassName("news-event");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    index++;

    index > elements.length ? (index = 1) : {};

    elements[index - 1].style.cssText =
      "display:flex;justify-content:center; align-items:center";

    setTimeout(changeEvent, 5000);
  };

  changeEvent();
});

