chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  setTimeout(() => {
    Array.prototype.slice
      .call(
        document.querySelectorAll(
          '.Details.js-details-container.js-news-feed-event-group:not(.open)'
        )
      )
      .map(function(btn) {
        var target = btn.querySelector('.js-details-target');
        target && target.click();
      });
  }, 0);
});
