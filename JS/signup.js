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
const form = document.querySelector(".signup-form form");
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordField = form.elements["password"];
    

    if(validatePassword(passwordField)){
        // window.location = "construction.html";  //will check and change page
    }
});

//Error Function
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

// Password Validation

function validatePassword(element){
    const passwordRegEx = "^(?=.*[0-9])"              // A digit must occur at least once
                        + "(?=.*[a-z])(?=.*[A-Z])"   // a lower case alphabet amd upper case alphabet must occur at least once
                        + "(?=.*[@#$%^&+=])"         //represents a special character that must occur at least once.
                        + "(?=\\S+$).{8,}$";         // white spaces don’t allowed in the entire string and at least 8 and more characters
  

    const password = element.value.trim(); 

      if(!password.match(passwordRegEx)){

        errorMessage("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",element);
        return false;

    }else{

        return true;
    }
}
 

//COLLECT DATA
//CHECK IF USER ALREADY EXIST WITH EMAIL
//SAVE DATA IN LOCAL STORAGE WITH EMAIL AS KEY

let collectData = function(){

    const passwordField = form.elements["password"];

    if(validatePassword(passwordField) === true){


        let userList = JSON.parse(localStorage.getItem("users"))  ? JSON.parse(localStorage.getItem("users")) : [];

        let newUser = {
            "name" : document.getElementById('name').value,
            "email" : document.getElementById('email').value,
            "password" : document.getElementById('password').value, 
        }
        

        if(existEmail(document.getElementById('email').value) === 1){
            errorMessage("email already exist use another",);

        }else{
            if( document.getElementById('name').value && document.getElementById('email').value && document.getElementById('password').value){
             
                userList.push(newUser);

                localStorage.setItem("users", JSON.stringify(userList));

                window.location = "construction.html";  //will check and change page

            }else{
                alert("Not saved: Input all parameters");
            }
        }
    }
}


function existEmail(email) {  

    if(localStorage.getItem("users") === null){

    }else{
        let returnKey;

    for(let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++){
        
        allElements = JSON.parse(localStorage.getItem("users"));
        let dataEmail = JSON.stringify(allElements[i]["email"]).slice(1,-1);  
        
        if(email === dataEmail){
            
            returnKey = 1;
            break;

        }else{
            
            returnKey = 2;
        } 
    } 
    return returnKey ;
    }
}

