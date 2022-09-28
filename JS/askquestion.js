
function closeModal(){
    const modal = document.querySelector(".askquestion-modal");
    modal.style.display = "none";
}

let questionsList = JSON.parse(localStorage.getItem("question"))  ? JSON.parse(localStorage.getItem("question")) : [];
let singedInUser = JSON.parse(localStorage.getItem("session"))

function getQuestion(){
    const {name} = singedInUser
    
    let eachQuestion ={
        "post_id":"",
        "author_id":"",
        "author": name,
        "title" : document.querySelector(".title input").value,
        "body" : document.querySelector(".body textarea").value,
        "tags" : document.querySelector(".tags input").value,
        "date_added": new Date.now(),
        'answer' : []
    }


    questionsList.push(eachQuestion);
    localStorage.setItem("question", JSON.stringify(questionsList));
    window.location = "question.html";
}

