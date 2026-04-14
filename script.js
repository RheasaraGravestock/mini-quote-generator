let quotes = [
    "You've got this",
    "You can do it!",
    "I believe in you!",
    "You're smashing it!",
    "You're doing great"
]

const quotePlaceholder = document.getElementById("quotePlaceholder");
const button = document.getElementById("clickButton");

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
     quotePlaceholder.textContent = quotes[randomIndex];
}
button.addEventListener("click", showQuote);
