chrome.runtime.sendMessage({swipe: "swipeit"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const elem = document.getElementsByClassName("recsGamepad__button")[3]
  const limit = request.rightSwipe
  if (request.todo == "swipeRight") {
    let i = 0
    let timer = setInterval(function() {
      if (limit > i) {
        elem.click()
        i++
      } else {
        clearInterval(timer)
      }
    }, 3000)
  }
})

