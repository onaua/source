chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, { file: "contentScript.js" });
  }, { url: [{ schemes: ["http", "https"] }] });