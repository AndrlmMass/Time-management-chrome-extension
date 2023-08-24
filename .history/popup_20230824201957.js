document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.querySelector(".popup-close");
  var popupContainer = document.getElementById("popup-container");

  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    return false;
  });

  document.addEventListener("click", function (event) {
    if (event.target !== popupContainer && !popupContainer.contains(event.target)) {
      event.stopPropagation();
      event.preventDefault();
    }
  });
});
