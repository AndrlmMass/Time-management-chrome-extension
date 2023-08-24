document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("close-button");
  var popupContainer = document.getElementById("popup-container");

  closeButton.addEventListener("click", function () {
    // This will prevent the button from working
    return false;
  });

  // Optionally, you can hide the button entirely
  closeButton.style.display = "none";

  // You might want to provide an alternate way to close the popup, like through a background action
});

