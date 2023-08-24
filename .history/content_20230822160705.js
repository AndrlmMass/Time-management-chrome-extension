// List of domains where the content script should activate
const allowedDomains = [
  "youtube.com",
  "facebook.com"
];

// Function to check if the current domain is in the allowed list
function isAllowedDomain(url) {
  const domain = new URL(url).hostname;
  return allowedDomains.includes(domain);
}

// Main logic of the content script
if (isAllowedDomain(window.location.href)) {
  console.log("Content script is active on this page.");
  
  // Example: Modify the background color of the page
  document.body.style.backgroundColor = "lightyellow";
}
