// Create context menus on installation
chrome.runtime.onInstalled.addListener(() => {
  // Text selection context menu
  chrome.contextMenus.create({
    id: "search-chatgpt",
    title: "Search on ChatGPT",
    contexts: ["selection"]
  });

  // Image context menu
  chrome.contextMenus.create({
    id: "describe-image",
    title: "Describe Image on ChatGPT",
    contexts: ["image"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((data, tab) => {
  if (data.menuItemId === "search-chatgpt" && data.selectionText) {
    // Encode the selected text for URL
    const encodedText = encodeURIComponent(data.selectionText);
    // Open ChatGPT with the selected text as a parameter
    const url = `https://chatgpt.com/?q=${encodedText}`;
    chrome.tabs.create({ url });
  } else if (data.menuItemId === "describe-image" && data.srcUrl) {
    // Encode the image URL and create a prompt
    const encodedImageUrl = encodeURIComponent(data.srcUrl);
    const prompt = `Describe this image: ${encodedImageUrl}`;
    const encodedPrompt = encodeURIComponent(prompt);
    // Open ChatGPT with the image description prompt
    const url = `https://chatgpt.com/?q=${encodedPrompt}`;
    chrome.tabs.create({ url });
  }
});