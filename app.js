document.getElementById('right-btn').addEventListener("click", function(){
    var swipesV = document.getElementById('nswipes').value
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeRight", rightSwipe: swipesV})
    });
});



