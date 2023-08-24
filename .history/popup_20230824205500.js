document.addEventListener("DOMContentLoaded", function () {
  var timeLimitSelect = document.getElementById("time-limit");
  var cooldownInput = document.getElementById("cooldown");

  timeLimitSelect.addEventListener("change", function () {
    var selectedTimeLimit = timeLimitSelect.value;
  });

  cooldownInput.addEventListener("change", function () {
    var selectedCooldown = cooldownInput.value;
  });
});

