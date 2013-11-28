chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("reppalcing the url" + info.url);
	var resourceName =info.url.match(/\/([^\/]+?)(\?|$)/)[1]
	var redirectUrl = chrome.runtime.getURL(resourceName);
    return {redirectUrl: redirectUrl};
  },
  {
    urls: [
      "http://cdn.sstatic.net/*"
    ]
  },
  ["blocking"]
);
