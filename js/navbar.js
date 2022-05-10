window.onscroll = function() {addNav()};

var navbar = document.getElementById("nav-bar")
var sticky = navbar.offsetTop;

function addNav() {
    if (window.scrollY > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}