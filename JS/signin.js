// SHOW PASSSWORD VISIBILITY

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent the default effect of submit
const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
});


//COLLECT DATA
function collectData(){

    let  email =  document.getElementById('email').value;
    let  password =  document.getElementById('password').value;


    if(localStorage.getItem("users") === null){

    }else{
        let returnKey;

    for(let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++){
        
        allElements = JSON.parse(localStorage.getItem("users"));
        let userEmail = JSON.stringify(allElements[i]["email"]).slice(1,-1);
        let userPassword = JSON.stringify(allElements[i]["password"]).slice(1,-1);    
        
        if(email === userEmail && password === userPassword){
            
            returnKey = "success";
            break;

        }else if(email === "" || password === ""){  // if they exist
            
            returnKey = "noinput";
        }else{

            returnKey = "failed";
        }
    } 
    return returnKey ;
    }
}

function validateEmail(){
    let  email =  document.getElementById('email').value;
    const typeInput = "email";


   if(localStorage.getItem("users") === null){

   }else{

        for(let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++){
            
            allElements = JSON.parse(localStorage.getItem("users"));
            let userEmail = JSON.stringify(allElements[i]["email"]).slice(1,-1);   
            
            if(email === userEmail){

                errorMessage("", typeInput);
                inputFieldES(typeInput, true);
                return false;
        
            }else{
                errorMessage("Email does not match", typeInput);
                inputFieldES(typeInput,false);
                return true;
            }
        }
    }
}

function validatePassword(){
    let  password =  document.getElementById('password').value;
    const typeInput = "password";

  if(localStorage.getItem("users") === null){

  }else{


        for(let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++){
        
            allElements = JSON.parse(localStorage.getItem("users"));
            let userEmail = JSON.stringify(allElements[i]["email"]).slice(1,-1);
            let userPassword = JSON.stringify(allElements[i]["password"]).slice(1,-1);    
            
            if( password === userPassword){
                errorMessage("", typeInput);
                inputFieldES(typeInput, true);
                return true;
            }else{
               
                errorMessage("Password does not match", typeInput);
                inputFieldES(typeInput, false);
                return false;
            }
        }
    }
}

  
function errorMessage(info,element){

    if(element){
        const errorField = `#${element}~.error-message`;
        const errorBox = document.querySelector(errorField);

        errorBox.innerText = info;
        errorBox.style.display = "block";
        element.toggle = "error"
    }else{
        const errorBox = document.querySelector(".error-message");
        errorBox.innerText = info;
        errorBox.style.display = "block";
    }
}

function verify(){
    if(collectData() === "success"){
        window.location = "question.html";  //will check and change page
    }
    if(collectData() === "failed"){

        // errorMessage("Incorrect login details")
    }
}


//Error and Success for Input field 
function inputFieldES(element,bool){
   
    const inputField = `#${element}`;
    const inputBox = document.querySelector(inputField);
    const inputIcon = document.querySelector(`${inputField}~.bi`);

    if(bool === false){
   
        inputBox.style.border = "1px solid #DC3545";
        inputIcon.classList.add("bi-exclamation-circle");
        inputIcon.classList.remove("bi-check");

    }else{

        inputBox.style.border = "1px solid #198754";
        inputIcon.classList.add("bi-check");
        inputIcon.classList.remove("bi-exclamation-circle");
    }
}

//Remember me 
const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}






















