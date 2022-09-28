const userEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const message = document.getElementById("message");
const errorIcon = document.getElementById("error-icon");


function getFormValues() {
    return {
        email: document.getElementById('email').value

    }
}

function getEmail() {
    const users = JSON.parse(localStorage.getItem('users'))
    const { email } = getFormValues() // destructuring
    // compare data from dom with localstorage
    let exist = false;
    users.forEach((user, index) => {
        if (email == user.email) {

            localStorage.setItem('index', index);

            return exist = true;
        }

    });
    return exist;

}

const submitIt = document.getElementById('form')
submitIt.addEventListener('submit', function loginUser(e) {
    e.preventDefault();

    if (getEmail()) {
        alert('We have sent you an email. Follow the instruction to reset your forgotten password');
        window.location.href = "resetpassword.html"
        return;
    }
    else {
        errorIcon.style.visibility = "visible";
        errorMessage.innerText = "Email not found";
        userEmail.style.border = "1px solid #DC3545";
        errorMessage.style.color = "#DC3545"; //red
        errorMessage.style.textAlign = "left";
    }
});

