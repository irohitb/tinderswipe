chrome.runtime.sendMessage({swipe: "swipeit"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("we have reached here");

if (request.todo == "swipeRight") {
  function loopLimit (limit) {
    var i76=0;
    var interval = setInterval(
    function(){
    var elem = document.getElementsByClassName("recsGamepad__button--like");
    elem[0].click()
    i76++;
    console.log(i76)
    if (i76 == limit) clearInterval(interval);
    }, 2000)
    }

  loopLimit(request.rightSwipe)
}

else if (request.todo == "swipeLeft") {

  function loopLimit (limit) {
  var i76=0;
  var a = setInterval(
  function(){
  var elem = document.getElementsByClassName("recsGamepad__button--dislike");
  elem[0].click()
  i76++;
  console.log(i76)
  if (i76 == limit) clearInterval(a);
  }, 2000)
  }

  loopLimit(request.leftSwipe);
  }
});
