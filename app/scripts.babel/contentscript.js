chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('rcv!')
  Array.prototype.slice
    .call(document.querySelectorAll(".js-details-target"))
    .map(function(btn) {
      btn.click();
    });
});
