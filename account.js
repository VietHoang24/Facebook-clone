
let account_modal= document.getElementById("cookiesPopup");
let watch_account_information = document.getElementById("watch_account_information");


account_modal.onclick = function(){
    account_modal.style.display="none";
}
watch_account_information.onclick=function(){
    let account_user = JSON.parse( localStorage.getItem('account_information'));
    let user_name =document.getElementById("user_name");
    let user_email = document.getElementById("user_email");

    
    user_name.innerHTML = account_user.fullname;
    user_email.innerHTML=account_user.id;
    account_modal.classList.remove("d-none");
    account_modal.style.display="flex";



}