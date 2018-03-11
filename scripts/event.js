chrome.runtime.onMessage.addListener(function(request, sender, senderResponse){
  if (request.swipe == "swipeit") {
chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.pageAction.show(tabs[0].id);
    })
  }
})
