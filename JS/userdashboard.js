window.addEventListener('load', function () {
    let avatar =  document.querySelector('.avatar');
    let profile =  document.querySelector('.profileImage');

    const {name} = JSON.parse(this.localStorage.getItem('session'))
    
    // console.log(session)
    const arrayName = name.split(" ")
  
    avatar.setAttribute("src", `https://ui-avatars.com/api/?name=${arrayName.join("+")}`)
    profile.setAttribute("src", `https://ui-avatars.com/api/?name=${arrayName.join("+")}`)
  
  
  })
  


const user = JSON.parse(localStorage.getItem("session"))

// change name to signed in use
document.getElementById("signed_name").innerText = user.name

// console.log(domName)
// console.log(user.name)
