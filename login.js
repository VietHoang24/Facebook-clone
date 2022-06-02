var modal = document.getElementById("myModal");
let login = document.getElementById('login_wrapper_id')
var btn = document.getElementById("login");
let signup = document.getElementById("signup");
let signup_click_outside = document.getElementById("signup_click_outside");
let signup_route = document.getElementById("signup_route");
let login_btn = document.getElementById("login_btn");

let data;
console.log()
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
  if (event.target == modal) {
    console.log(modal.style.display != "none")
    modal.style.display = "none"// phải sảy ra sau khi thằng dưới kia...
    console.log("Huhu1")
  }
  if (event.target == signup_click_outside) {

    signup.style.display = "none"// phải sảy ra sau khi thằng dưới kia...
    console.log("Huhu1")
  }
}
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";

}
signup_route.onclick = function () {
  signup.style.display = 'block';
  modal.style.display = "none";

}

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/account/`, {
    method: 'GET',// tạo cơ sở dữ liệu mới     
    headers: {
      'Content-Type': "application/json",
    }
  }).then((response) => response.json())
  .then((data1) => {
    data=data1
    console.log(data)})
  .catch((error) => console.log(error));

 
} 

const checkEmailAndPassword = () => {
  data&&data.map()
}
login_btn.onclick =  async () => {
      await fetchData();
      let email_value = document.getElementById("email_login")
      let password_value = document.getElementById("password_login")

     
}
