//This will Auto Swipe profile right

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

loopLimit(50);

//Instructions to use.

//login to tinder on your Chrome or firefox browser
//Visit the loction from where you start swipping people
//right click -> inspect elements -> Right next to element tab should be a console tab, paste the above script there.

//About swipe.
//LoopLimmit is returning the value of 50  (looplimit(50), This means it will swipe only 50 profile which is the limiti normal tinder account can swipe in a day
//Set Interval -> This sets timer in milliseconds so here, it will swipe a profile after every 2 seconds.
