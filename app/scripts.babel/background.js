chrome.webRequest.onCompleted.addListener(
  function(details) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {});
    });
  },
  {
    urls: [
      "https://github.com/dashboard-feed",
      "https://github.com/dashboard-feed?page=*"
    ]
  }
);
