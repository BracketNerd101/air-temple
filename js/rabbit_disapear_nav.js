var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("rabbit").style.top = "0";
  } else {
    document.getElementById("rabbit").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}