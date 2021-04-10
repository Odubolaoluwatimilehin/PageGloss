
let color = '#3aa757';
let originalBgColor = '#ffffff';
let scrollToggle = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ originalBgColor });
  chrome.storage.sync.set({ scrollToggle });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  console.log( `scrollToggle: ${scrollToggle}`);
  console.log('Default background color set to %cgreen', `color: ${originalBgColor}`);

});
