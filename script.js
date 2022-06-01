let sub_nav= document.getElementById("sub_nav");
let sub_nav_modal= document.getElementById("sub_nav_modal");
let navbar= document.getElementById("navbar");
let scroll_to_top= document.getElementById("scroll_to_top");
sub_nav.addEventListener("click",function(){
 alert(document.documentElement.scrollTop)
})
let navbarHeight=sub_nav.offsetTop;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > navbarHeight ) {
        sub_nav_modal.style.display="block";
    } else {
        sub_nav_modal.style.display="none";
    }
  }
scroll_to_top.onclick=function() {
    window.scrollTo(0, 0);
}