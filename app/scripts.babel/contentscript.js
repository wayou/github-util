chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  Array.prototype.slice
    .call(document.querySelectorAll(".js-details-target"))
    .map(function(btn) {
      btn.click();
    });
});
