// =================== DOM =======================
let info = document.querySelector("h3");
let message = document.querySelector(".message");
let boxes = document.querySelectorAll(".box");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");

// =================== comp moves ================
let compMove = Math.floor(Math.random() * 3);




// =================== user moves ================
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(`${box.getAttribute("class")} was clicked`);
    });
});
