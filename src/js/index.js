import "./../css/index.css";

let form = document.getElementById("myForm");
let labels = form.getElementsByTagName("label");
let inputs = form.getElementsByTagName("input");
let submitButton = document.getElementById("submitButton");
let votingElement = document.getElementById("votingElement");
let votingMessage = document.getElementById("votingMessage");

let selectedRating = 0;
let ratingResult = document.getElementById("ratingResult");

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", updateSelected);
}

form.addEventListener("submit", validateForm);

function updateSelected() {
    let newSelected = event.target.nextElementSibling.value;

    if (selectedRating != 0 && selectedRating != newSelected) {
        inputs[selectedRating - 1].previousElementSibling.classList.remove(
            "selected"
        );
    }
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled");
    event.target.classList.add("selected");
    selectedRating = newSelected;
}

function validateForm() {
    event.preventDefault();
    if (selectedRating != 0) {
        votingElement.style.display = "none";
        votingMessage.style.display = "flex";
        ratingResult.innerHTML = selectedRating;
    }
}
