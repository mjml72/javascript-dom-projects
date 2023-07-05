const container = document.getElementById("container");
const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if(e.target === container){
        modal.style.display = "none";
    }
});
