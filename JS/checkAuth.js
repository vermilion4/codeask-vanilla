 function checkAuth(){
    let session = JSON.parse(localStorage.getItem("session"));
  
    if(session == undefined){
       setTimeout(() => {
        window.location = "index.html";
    }, 2000);
     
      
    }
}

  function logout(){
    localStorage.removeItem("session");

    setTimeout(() => {
        window.location = "index.html";
    }, 2000);
  }
 