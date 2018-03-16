document.getElementById('right-btn').addEventListener("click", function(){
  if (document.getElementById('cbox').checked) {
    console.log("Insta Box checked")
    var swipesV = document.getElementById('nswipes').value
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeRightY", rightSwipe: swipesV})
    });
  }
  else {
    console.log("Insta Box not checked")
    var swipesV = document.getElementById('nswipes').value
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeRight", rightSwipe: swipesV})
    });
  }
});

document.getElementById('left-btn').addEventListener("click", function(){
  var swipesV = document.getElementById('nswipes').value
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeLeft", leftSwipe: swipesV})
    });
});



/*document.getElementById('insta-btn').addEventListener("click", function(){
  var instaProf = document.getElementById('insta-btn')
  var instaCheck = instaProf.value
  console.log(instaProf.value);
  console.log(instaProf.value);
    if (instaProf.value == "Insta-profile Enable") {
    instaProf.value = "Insta-profile Disable"
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todoE: "InstaProfE"})
  });
}
  else if (instaProf.value == "Insta-profile Disable") {
    instaProf.value = "Insta-profile Enable"
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todoN: "InstaProfD"})
    });
  }
});
*/
