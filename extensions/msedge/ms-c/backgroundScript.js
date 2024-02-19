chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, { file: "main.js" });
  }, { url: [{ schemes: ["http", "https"] }] });