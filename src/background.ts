export {}

console.log("Background log!")

if (chrome.runtime.onStartup) {
  console.log("Extension started")
}
