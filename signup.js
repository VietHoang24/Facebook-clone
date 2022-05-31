// function bản chất của nó là 1 object
//https://stackoverflow.com/questions/5371047/getelementbyid-returns-null-even-though-the-element-exists
/*
định nghĩa rules
Nguyên tắc của các rules
1. Khi có lỗi, trả ra message lỗi
2. khi hợp lệ, không trả ra cái gì cả hoặc trả về undefined
*/
Validator.isRequired= function(selector){
    return{
        selector: selector,
        test: function(value){
            return value.trim()?undefined:"vui lòng nhập trường này"
        }
    }
}
Validator.isEmail=function(selector){
    return{
        selector: selector,
        test: function( value){
            const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return res.test(String(value).toLowerCase())? undefined: "Vui lòng nhập chính xác email";
        }
    }
}
Validator.minLength=(selector,min)=>{
    return{
        selector: selector,
        test: function(value){
            return value.trim().length>=min?undefined:`vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}
Validator.confirmPassword=(selector,password)=>{
    return{
        selector: selector,
        test: function(confirmPassword){
            console.log("confirm password: ", confirmPassword, "password: ",password())
            return confirmPassword.trim()==password()? undefined : `giá trị nhập vào không trùng khớp`
        }
    }
}
Validator({
    form: '#form-1',
    errorMessage: '.form-message',
    rules:[
        Validator.isEmail('#email'),
        Validator.isRequired('#fullname'),
        Validator.minLength('#password',6),
        Validator.confirmPassword("#password_confirmation",function(){
            //return document.getElementById("password").innerText.trim();
            return document.querySelector("#form-1 #password").value
        })
    ]
})

function Validator(option){
        // hàm thực hiện validate full name
       
        const validate =(inputElement,rule,messageElement)=>{
            var errorMessage= rule.test(inputElement.value)
            
            if(errorMessage){
                messageElement.innerText=errorMessage
                inputElement.parentElement.classList.add('invalid')
            }
            else{
                messageElement.innerText=""
                inputElement.parentElement.classList.remove('invalid')
            }
        }
       
        // lấy element của form cần validate
        var formElement= document.querySelector(option.form)
        if(formElement){
            option.rules.forEach(rule=> {
                // lấy element input
                var inputElement=formElement.querySelector(rule.selector);
                var messageElement=inputElement.parentElement.querySelector(option.errorMessage)
                if(inputElement){
                  
                    // xử lý trường hợp blur khỏi input
                    inputElement.onblur=()=>{
                      validate(inputElement,rule,messageElement)                   
                    }

                    // xử lý mỗi khi người dùng nhập 
                    inputElement.oninput=()=>{
                        messageElement.innerText=""
                        inputElement.parentElement.classList.remove("invalid")
                    }
                }
              
            });
        }

}

let signup = document.getElementById("signup");
let signup_route=document.getElementById("signup_route");
var modal = document.getElementById("myModal");
let signup_form=document.getElementById("fomr-1")
signup.style.display='none'

signup_route.onclick = function(){
    signup.style.display='block';
    modal.style.display="none";

}


signup.addEventListener("click", function(){
    console.log("đóng signup")
    
});

