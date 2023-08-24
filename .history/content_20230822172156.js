// List of domains where the content script should activate
const allowedDomains = [
    "www.facebook.com",
    "youtube.com"
  ];
  
  // Function to check if the current domain is in the allowed list
  function isAllowedDomain(url) {
    const domain = new URL(url).hostname;
    console.log("Current domain:", domain); // Debug: Check the current domain
    return allowedDomains.includes(domain);
  }
  
  // Main logic of the content script
  console.log("Current URL:", window.location.href); // Debug: Check the current URL
  if (isAllowedDomain(window.location.href)) {
    console.log("Content script is active on this page.");
    chrome.runtime.sendMessage({ action: "open_popup" });
  }
  