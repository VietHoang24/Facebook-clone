var modal = document.getElementById("myModal");
let login = document.getElementById('login_wrapper_id')
var btn = document.getElementById("login");
let signup = document.getElementById("signup");
let signup_click_outside = document.getElementById("signup_click_outside");
let signup_route = document.getElementById("signup_route");
let login_btn = document.getElementById("login_btn");
let accountInformation;
let data;

let password_form=document.querySelector(".i-password");
let message_login_password = document.getElementById("message_login_password");
let email_login_form=document.querySelector(".i-email");
let message_email_login= document.getElementById("message_email_login");
console.log()
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
  if (event.target == modal) {
    
    modal.style.display = "none"// 

  }
  if (event.target == signup_click_outside) {

    signup.style.display = "none"// 
 
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
    data= data1
  
  })
  .catch((error) => console.log(error));

 
} 

const checkEmailAndPassword = (email_value, password_value) => {
  console.log(localStorage.getItem("account_information"))
let checkEmail=0;
 data.map(item=>{
    if(item.id==email_value)
    checkEmail++;
    if(item.id==email_value&&item.password==password_value){
      accountInformation=item
      localStorage.setItem("account_information", JSON.stringify(accountInformation));
      
    }

  }) 
  if(accountInformation==undefined){
    if(checkEmail==0){
      email_login_form.classList.add("invalid")
      message_email_login.innerText = "Vui lòng nhập lại Email"
    }
    else if(checkEmail==1) {
      
      password_form.classList.add("invalid")
      message_login_password.innerHTML="Nhập sai mật khẩu"
    } 
  }
  else {
    modal.style.display = "none"
    
  }
}
login_btn.onclick =  async () => {
      await fetchData();
      let email_value = document.getElementById("email_login").value
      let password_value = document.getElementById("password_login").value
     
     checkEmailAndPassword(email_value,password_value)
}
// check password
password_form.oninput=function(){
  password_form.classList.remove("invalid")
  message_login_password.innerHTML=""
}
email_login_form.oninput=function(){
  email_login_form.classList.remove("invalid")
  message_email_login.innerText = ""
  
}