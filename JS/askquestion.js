
function closeModal(){
    const modal = document.querySelector(".askquestion-modal");
    modal.style.display = "none";
}

let questionsList = JSON.parse(localStorage.getItem("question"))  ? JSON.parse(localStorage.getItem("question")) : [];

function getQuestion(){
    let eachQuestion ={
        "title" : document.querySelector(".title input").value,
        "body" : document.querySelector(".body textarea").value,
        "tags" : document.querySelector(".tags input").value
    }


    questionsList.push(eachQuestion);
    localStorage.setItem("question", JSON.stringify(questionsList));
    window.location = "question.html";
}

