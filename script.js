let sub_nav= document.getElementById("sub_nav");
let sub_nav_modal= document.getElementById("sub_nav_modal");
let navbar= document.getElementById("navbar");
let scroll_to_top= document.getElementById("scroll_to_top");

let navbarHeight=sub_nav.offsetTop;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > navbarHeight ) {
        sub_nav_modal.style.display="block";
       sub_nav.style.marginTop = "-20px"
    } else {
        sub_nav_modal.style.display="none";
        sub_nav.style.marginTop = "0"

    }
  }
scroll_to_top.onclick=function() {
    window.scrollTo(0, 0);
}