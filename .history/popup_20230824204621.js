// popup.js

document.addEventListener("DOMContentLoaded", function () {
  var timeLimitSelect = document.getElementById("time-limit");
  var cooldownInput = document.getElementById("cooldown");

  timeLimitSelect.addEventListener("change", function () {
    var selectedTimeLimit = timeLimitSelect.value;
    // Store the selected time limit in a variable or use it as needed
  });

  cooldownInput.addEventListener("change", function () {
    var selectedCooldown = cooldownInput.value;
    // Store the selected cooldown value in a variable or use it as needed
  });
});

