declare const chrome: any;
const captureScreenshot = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    console.log(tab)

    const dataUrl = await new Promise((resolve) => {
      chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" }, (data: unknown) => {
        resolve(data);
      });
    });
    console.log(dataUrl)
    
    // Handle the captured screenshot data (dataUrl)
    console.log("Screenshot captured:", dataUrl);
  } catch (error) {
    console.error("Error capturing screenshot:", error);
  }
};
export default captureScreenshot
