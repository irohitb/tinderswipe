chrome.runtime.sendMessage({swipe: "swipeit"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("we have reached here");
  var elem = document.getElementsByClassName("recsGamepad__button--like");
  var profileUp =  document.getElementsByClassName("recCard__openProfile");
    profileUp[0].click()

if (request.todo == "swipeRight") {
  function loopLimit (limit) {
    var i76=0;
    var interval = setInterval(
    function(){

 //Tinder Profile KeyUP event
    elem[0].click()
    setTimeout(function() {
      profileUp[0].click()
    }, 2000)

    i76++;
    if (i76 == limit) clearInterval(interval);
  }, 5000)
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
