chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "open_popup") {
    // Open a new popup window with the desired content
    chrome.windows.create({
      url: "popup2.html", // Replace with your popup HTML file
      type: "popup",
      width: 450,
      height: 300
    });
  }
});
