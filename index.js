const ratingCircles = document.querySelectorAll(".ratings");
const ratingDiv = document.querySelector(".rating");
const ratingCircle = ratingDiv.querySelector(".circle");
const submit = document.getElementById("btn");
const container = document.querySelector(".container");
const finalRating = document.getElementById("selected-rating");

let selectedRating = 0;

ratingCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        ratingCircles.forEach(ratingCircle => {
            ratingCircle.classList.remove('selected');
        });
        circle.classList.add('selected');
        selectedRating = circle.getAttribute('data-value');
    });
});


submit.addEventListener("click", () => {
    container.classList.add("flip");
    finalRating.innerText = selectedRating;
})

