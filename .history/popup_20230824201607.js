document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("close-button");
  var popupContainer = document.getElementById("popup-container");

  closeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior (closing the popup)
  });

