const widgetButton = document.querySelector(".widget-button");
const widgetDescription = document.querySelector(".widget-description");

widgetButton.addEventListener("click", (e) => {
  e.preventDefault();
  showText();
});

function showText() {
  console.log(widgetDescription);
  widgetDescription.classList.toggle("widget-description__discovery");
}
