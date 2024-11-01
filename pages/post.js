window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("m-detail-sidebar");
var sticky = header.offsetTop;
console.log(header, sticky);

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("mt-20");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("mt-20");
  }

  if (window.pageYOffset > 2100) {
    header.classList.remove("sticky");
    header.classList.remove("mt-20");
  }
}
