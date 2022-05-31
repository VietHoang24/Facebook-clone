var modal = document.getElementById("myModal");
let login= document.getElementById('login_wrapper_id')
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
window.onclick = function(event) {

  if (event.target == modal) {
    modal.style.display = "none";
    console.log("Huhu")
  }
}
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it




// document.addEventListener("click", function(evt) {
//   let flyoutEl = document.getElementsByClassName('login_wrapper'),
//     targetEl = evt.target; // clicked element      
//   do {
//     if(targetEl != flyoutEl) {
//       // This is a click inside, does nothing, just return.
//       modal.style.display = "none";
//     }
//     // Go up the DOM
//     targetEl = targetEl.parentNode;
//   } while (targetEl);
//   // This is a click outside.
 

// });