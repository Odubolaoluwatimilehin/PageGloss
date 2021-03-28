
let color = '#3aa757';
let originalBgColor = '#ffffff';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ originalBgColor });
  console.log('Default background color set to %cgreen', `color: ${color}`);
   console.log('Default background color set to %cgreen', `color: ${originalBgColor}`);
});
