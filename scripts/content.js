chrome.runtime.sendMessage({swipe: "swipeit"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var elem = document.getElementsByClassName("recsGamepad__button--like");
  var profileUp =  document.getElementsByClassName("recCard__openProfile");
  var instaContainer = document.getElementsByClassName("StretchedBox");
  var instaClose = document.getElementsByClassName('close');
  var openInsta = document.querySelectorAll("a");
  var lengthTin = document.getElementsByClassName('Fw($medium)');
  var viewInsta = document.getElementsByClassName("H(55px)")

//Right Swipe with Insta
if (request.todo == "swipeRightY") {
console.log("with insta profile");
  function loopLimit (limit) {
      console.log("With InstaProfile Event Working")
    var i76=0;
    var interval = setInterval(
    function(){
      console.log("logging number of swipes")
      console.log(i76);
      console.log("profile up")
        profileUp[0].click()

      console.log("Before if container, length");
      console.log("length check");
      console.log(lengthTin.length);

      setTimeout(function() {
            if (lengthTin.length > 1 ) {

              console.log("Inside if lenght")
            setTimeout(function() {
              console.log("Show Insta container")
                instaContainer[7].click()
            }, 2000);

          setTimeout(function() {
              var instalen = openInsta.length - 1;
              console.log("Open Insta-profile")
              console.log(instalen)
            document.querySelectorAll("a")[33].click()
          }, 3500)

              setTimeout(function() {
                console.log("close Insta Container")
                  instaClose[0].click()
              }, 4000);

          setTimeout(function() {
          console.log("Click Like Button")
            elem[0].click()
            }, 4100)

            }

            else {

          setTimeout(function() {
              console.log("Else like event executed");
              elem[0].click()
          }, 3000)

        }


        i76++;

      }, 1000)

      if (i76 == limit) {
        clearInterval(interval);
          console.log("game over")
        }
      }, 5000)
    }

  loopLimit(request.rightSwipe)
}



//just rightSwipe
else if (request.todo == "swipeRight") {

console.log("Swipe Right Event")
  function loopLimit (limit) {
  console.log("Swipe Right Event Working")
  var i76=0;
  var a = setInterval(
  function(){
  elem[0].click()
  i76++;
  console.log(i76)
  if (i76 == limit) clearInterval(a);
  }, 2000)
  }
  loopLimit(request.rightSwipe);
  }



//just leftSwipe
else if (request.todo == "swipeLeft") {
console.log("Swipe left Event")

  function loopLimit (limit) {
  console.log("Left Right Event Working")
  var i76=0;
  var a = setInterval(
  function(){
  var eleme = document.getElementsByClassName("recsGamepad__button--dislike");
  eleme[0].click()
  i76++;
  console.log(i76)
  if (i76 == limit) clearInterval(a);
  }, 2000)
  }

  loopLimit(request.leftSwipe);
  }

});//chrome Runtime
