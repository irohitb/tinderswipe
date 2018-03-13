chrome.runtime.sendMessage({swipe: "swipeit"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var elem = document.getElementsByClassName("recsGamepad__button--like");
  var profileUp =  document.getElementsByClassName("recCard__openProfile");
  var instaContainer = document.getElementsByClassName("StretchedBox");
  var instaClose = document.getElementsByClassName('close');
  console.log("stretchable container length")
  console.log(instaContainer.length)
  var openInsta = document.querySelectorAll("a");
  var lengthTin = document.getElementsByClassName('Fw($medium)');



if (request.todo == "swipeRight") {
  function loopLimit (limit) {
    var i76=1;
    var interval = setInterval(
    function(){
      console.log("logging number of swipes")
      console.log(i76);


        console.log("profile up")
        profileUp[0].click()

console.log("Before if container, length");
console.log("length check");




      if (lengthTin.length > 1 ) {
        console.log("Inside if lenght")

      setTimeout(function() {
        console.log("Show Insta container")
          instaContainer[5].click()
      }, 2000);

    setTimeout(function() {
        console.log("Open Insta-profile")
            openInsta[34].click()
      }, 4000)


        setTimeout(function() {
          console.log("close Insta Container")
            instaClose[0].click()
        }, 5000);

      setTimeout(function() {
      console.log("Click Like Button")
        elem[0].click()
      }, 6000)

      }
      else {
    setTimeout(function() {

        console.log("Else like event executed");
        elem[0].click()
    }, 3000)
  }

    i76++;
    if (i76 == limit) {
    clearInterval(interval);
    console.log("game over")
  }
}, 7000)
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
