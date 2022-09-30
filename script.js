function lightTheme() {
  document.body.style.backgroundColor = "white";
  document.querySelector("h1").style.color = "#444444";
  document.querySelector(".change-p").style.color = "#242424";
}

function darkTheme() {
  document.body.style.backgroundColor = "#242424";
  document.querySelector("h1").style.color = "#d8860b";
  document.querySelector(".change-p").style.color = "rgb(227, 227, 227)";
}

function changeColor() {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
}
