chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ 'url': chrome.extension.getURL('elasticsearch-sql-site/index.html') }, function (tab) {
  });
});
