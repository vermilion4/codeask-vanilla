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
  
function errorMessage(info,element){

    if(element){
        const errorBox = document.querySelector(".error-message");

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
        alert("login In succesful")
        window.location = "construction.html";  //will check and change page
    }
    if(collectData() === "failed"){

        errorMessage("Incorrect login details")
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






















