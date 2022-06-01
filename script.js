let sub_nav= document.getElementById("sub_nav_modal");
let navbar= document.getElementById("navbar");

sub_nav.addEventListener("click",function(){
 alert(document.documentElement.scrollTop)
})
let navbarHeight=sub_nav.offsetTop;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > navbarHeight ) {
        sub_nav.classList.add("sub_nav_toggle");
    } else {
    sub_nav.classList.remove("sub_nav_toggle")
    }
  }