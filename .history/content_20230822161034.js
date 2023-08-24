// List of domains where the content script should activate
const allowedDomains = [
    "youtube.com",
    "wik"
  ];
  
  // Function to check if the current domain is in the allowed list
  function isAllowedDomain(url) {
    const domain = new URL(url).hostname;
    return allowedDomains.includes(domain);
  }
  
  // Main logic of the content script
  if (isAllowedDomain(window.location.href)) {
    // Open a new popup window if the domain is allowed
    chrome.runtime.sendMessage({ action: "open_popup" });
  }
  
