// const captureScreenshot = async () => {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const video = document.createElement("video");

  // const captureStream = await navigator.mediaDevices.getDisplayMedia();
  // video.srcObject = captureStream;
  // // @ts-expect-error
  // context?.drawImage(video, 0, 0, window.width, window.height);
  // const frame = canvas.toDataURL("image/png");
  // // captureStream.getTracks().forEach((track) => track.stop());
  // window.location.href = frame;
  
//   startCapture;
// };
// export default captureScreenshot;

export function takeScreenshot() {
  const screenshot = document.documentElement.cloneNode(true);
  screenshot.style.pointerEvents = "none";
  screenshot.style.overflow = "hidden";
  screenshot.style.webkitUserSelect = "none";
  screenshot.style.mozUserSelect = "none";
  screenshot.style.msUserSelect = "none";
  screenshot.style.oUserSelect = "none";
  screenshot.style.userSelect = "none";
  screenshot.dataset.scrollX = window.scrollX;
  screenshot.dataset.scrollY = window.scrollY;
 const blob = new Blob([screenshot.outerHTML], {
   type: "text/html",
 });

 let reader = new FileReader();
let base64String;
 reader.onloadend = function () {
   // reader.result contains the base64-encoded string
   base64String = reader.result;
   console.log(base64String);

   // Now you can use the base64String as needed
 };

 // Read the Blob as a Data URL, which will be base64-encoded
 reader.readAsDataURL(blob);
return base64String
}

