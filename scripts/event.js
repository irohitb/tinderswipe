chrome.runtime.onMessage.addListener(function(request, sender, senderResponse){
  if (request.swipe == "swipeit") {
chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.pageAction.show(tabs[0].id);
    })
  }
  if (request.swipe == "Instait") {
    console.log("Content passed from content script")
    console.log(request.Oinsa);
    chrome.tabs.create({url: request.Oinsa });
  }
})
