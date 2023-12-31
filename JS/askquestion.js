
function closeModal ()
{
    const modal = document.querySelector(".askquestion-modal");
    modal.style.display = "none";
}

let questionsList = JSON.parse(localStorage.getItem("question")) ? JSON.parse(localStorage.getItem("question")) : [];
let singedInUser = JSON.parse(localStorage.getItem("session"));

window.addEventListener('load', function ()
{
    let avatar = document.querySelector('.avatar');
    const { name } = singedInUser;
    // console.log(session)
    const arrayName = name.split(" ");

    avatar.setAttribute("src", `https://ui-avatars.com/api/?name=${ arrayName.join("+") }`);


});
function getQuestion ()
{
    const { name } = singedInUser;

    let eachQuestion = {
        "post_id": "",
        "author_id": "",
        "author": name,
        "title": document.querySelector(".title input").value,
        "body": document.querySelector(".body textarea").value,
        "tags": document.querySelector(".tags input").value,
        "date_added": Date.now(),
        'answer': []
    };


    questionsList.push(eachQuestion);
    localStorage.setItem("question", JSON.stringify(questionsList));
    window.location = "question.html";
}
