chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
      try {
          const queryParameters = tab.url.split("?")[1];
          const urlParameters = new URLSearchParams(queryParameters);
          const videoId = urlParameters.get("v");

          if (videoId) {
              chrome.tabs.sendMessage(tabId, {
                  type: "NEW",
                  videoId: videoId
              });
          }
      } catch (error) {
          console.error("Error parsing YouTube URL:", error);
      }
  }
});