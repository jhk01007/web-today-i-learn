const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const tilDateInput = document.querySelector("#til-date");
const tilTitleInput = document.querySelector("#til-title");
const tilContentInput = document.querySelector("#til-content");
const tilResetButton = document.querySelector("#til-reset-button");

if (tilDateInput) {
  tilDateInput.value = new Date().toISOString().split("T")[0];
}

if (tilForm && tilList && tilDateInput && tilTitleInput && tilContentInput) {
  tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dateValue = tilDateInput.value;
    const titleValue = tilTitleInput.value.trim();
    const contentValue = tilContentInput.value.trim();

    if (!dateValue || !titleValue || !contentValue) {
      return;
    }

    const tilItem = document.createElement("article");
    tilItem.className = "til-item";

    const timeElement = document.createElement("time");
    timeElement.dateTime = dateValue;
    timeElement.textContent = dateValue;

    const titleElement = document.createElement("h3");
    titleElement.textContent = titleValue;

    const contentElement = document.createElement("p");
    contentElement.textContent = contentValue;

    tilItem.append(timeElement, titleElement, contentElement);
    tilList.prepend(tilItem);

    tilForm.reset();
    tilDateInput.value = new Date().toISOString().split("T")[0];
    tilTitleInput.focus();
  });
}

if (tilResetButton && tilList && tilDateInput && tilTitleInput) {
  tilResetButton.addEventListener("click", function () {
    tilList.innerHTML = "";

    requestAnimationFrame(function () {
      tilDateInput.value = new Date().toISOString().split("T")[0];
      tilTitleInput.focus();
    });
  });
}
