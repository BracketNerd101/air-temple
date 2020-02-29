window.onscroll = function () { myScrollIndicator() };

function myScrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myGirl").style.width = scrolled + "%";
}