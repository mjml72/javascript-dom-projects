const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {

    questions[i].addEventListener("click", (e) => {

       questions[i].classList.toggle("show");

    });

}
