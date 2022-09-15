// SHOW PASSSWORD VISIBILITY

const togglePassword = document.querySelector("#togglePassword");
const toggleCPassword = document.querySelector("#toggleCPassword");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#confirm-password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

toggleCPassword.addEventListener("click", function () {
    // toggle the type attribute
    const ctype = cpassword.getAttribute("type") === "password" ? "text" : "password";
    cpassword.setAttribute("type", ctype);
    
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


// Name Validation

function validateName(){
   
    const nameField = form.elements["name"];
    // const nameRegEx = "^(?![\s.]+$)[a-zA-Z\s.]*$";
    const nameRegEx = /^[a-zA-Z].*[\s\.]*$/g;
    const typeInput = "name";

    const name = nameField.value; 

      if(!name.match(nameRegEx)){

        errorMessage("Name field must not be empty", typeInput);
        inputFieldES(typeInput, false);
        return false;

    }else{
        errorMessage("", typeInput);
        inputFieldES(typeInput, true);
        return true;
    }
}

// Email Validation

function validateEmail(){
   
    const emailField = form.elements["email"];
    const emailRegEx = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const typeInput = "email";

    const email =  emailField.value; 

      if(!email.match(emailRegEx)){

        errorMessage("This is not a valid email", typeInput);
        inputFieldES(typeInput, false);
        return false;

    }else{

        if(existEmail(document.getElementById('email').value) === 1){

            errorMessage("email already exist use another", typeInput);
            inputFieldES(typeInput, false);
            return false;

        }else{

            errorMessage("", typeInput);
            inputFieldES(typeInput, true);
            return true;
        }
    }
}


// Password Validation
function validatePassword(){
    const passwordField = form.elements["password"];
    const passwordRegEx = "^(?=.*[0-9])"              // A digit must occur at least once
                        + "(?=.*[a-z])(?=.*[A-Z])"   // a lower case alphabet amd upper case alphabet must occur at least once
                        + "(?=.*[@#$%^&+=])"         //represents a special character that must occur at least once.
                        + "(?=\\S+$).{8,}$";         // white spaces don’t allowed in the entire string and at least 8 and more characters
  
    const typeInput = "password";
    const password = passwordField.value.trim(); 

    

      if(!password.match(passwordRegEx)){

        errorMessage("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", typeInput);
        inputFieldES(typeInput, false);
        return false;

    }else{
        errorMessage("", typeInput);
        inputFieldES(typeInput, true);
        return true;
    }
}
 
// IIFE
function showConfirmPassword(){
    const passwordField = document.getElementById("password");
    const password = passwordField.value.trim(); 

    if(password){
        confirmPassword();
    }
};

function confirmPassword(){
     
    const form = document.querySelector(".cpwrapper");
    form.style.display = "block";

}

function validateConfirmPassword(){
    const passwordField = document.getElementById("password");
    const password = passwordField.value.trim(); 

    const cpasswordField = document.getElementById("confirm-password");
    const cpassword = cpasswordField.value.trim();

    const typeInput = "confirm-password";

    if(password !== cpassword){
        errorMessage("Password does not match", typeInput);
        inputFieldES(typeInput, false);
        return false;

    }else{
        errorMessage("", typeInput);
        inputFieldES(typeInput, true);
        return true;

    }
}

//COLLECT DATA FROM FORM

let collectData = function(){


    if(validatePassword() === true && validateEmail() === true && validateName() === true && validateConfirmPassword() === true){


        let userList = JSON.parse(localStorage.getItem("users"))  ? JSON.parse(localStorage.getItem("users")) : [];

        let newUser = {
            "name" : document.getElementById('name').value,
            "email" : document.getElementById('email').value,
            "password" : document.getElementById('password').value, 
        }
       
        if( document.getElementById('name').value && document.getElementById('email').value && document.getElementById('password').value){
            
            userList.push(newUser);

            localStorage.setItem("users", JSON.stringify(userList));

            window.location = "question.html";  //will check and change page

        }else{
            alert("Not saved: Input all parameters");
        }
    
    }
}

// CHECK IF EMAIL EXIST IN DATABASE BEFORE
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

