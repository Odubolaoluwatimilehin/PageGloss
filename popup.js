// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let turnoffColor = document.getElementById("turnoffColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
let pickColor = await document.getElementById("myColor").value; 
chrome.storage.sync.set({ pickColor });
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
turnoffColor.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: defaultBackgroundColor,
  });
});
// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("pickColor", ({ pickColor }) => {
    document.body.style.backgroundColor = pickColor;
  });
 
}
function defaultBackgroundColor() {
  chrome.storage.sync.get("originalBgColor", ({ originalBgColor }) => {
    document.body.style.backgroundColor = originalBgColor;
  });
 
}
