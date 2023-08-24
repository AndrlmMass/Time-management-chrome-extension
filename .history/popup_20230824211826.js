document.addEventListener("DOMContentLoaded", function () {
  var timeLimitSelect = document.getElementById("time-limit");
  var cooldownInput = document.getElementById("cooldown");
  var saveSettingsButton = document.getElementById("save-settings");

  saveSettingsButton.addEventListener("click", function () {
    var selectedTimeLimit = timeLimitSelect.value;
    var selectedCooldown = cooldownInput.value;

    // Save the selected settings to storage
    chrome.storage.local.set({
      consolw.log("fhjsdjkhs")
      selectedTimeLimit: selectedTimeLimit,
      selectedCooldown: selectedCooldown
    }, function () {
      // Notify the user that settings have been saved
      alert("Settings saved!");

      // Close the popup window
      window.close()
    });
  });
});

