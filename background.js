const searchTerms = [
  "weather", "news", "chatgpt", "AI", "Edge browser", "coding", "sports", "movies", "music", "health",
  "technology", "finance", "travel", "history", "education", "recipes", "science", "art", "books", "games",
  "fitness", "python", "javascript", "microsoft", "space", "car", "android", "iOS", "browsers", "SEO"
];

function getRandomSearchTerm() {
  return searchTerms[Math.floor(Math.random() * searchTerms.length)];
}

chrome.action.onClicked.addListener(() => {
  let count = 0;

  chrome.tabs.create({ url: "https://www.bing.com" }, (tab) => {
    const tabId = tab.id;

    const interval = setInterval(() => {
      if (count >= 30) {
        clearInterval(interval);
        return;
      }

      const term = getRandomSearchTerm();
      const url = `https://www.bing.com/search?q=${encodeURIComponent(term)}`;

      chrome.tabs.update(tabId, { url: url });
      count++;
    }, 3000); // 3 seconds between searches (adjust as needed)
  });
});
