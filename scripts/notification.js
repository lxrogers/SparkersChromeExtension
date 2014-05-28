var otherPersonsName = 'Simon';
var otherPersonsGender = 'him';
var otherPersonsFbUrl = 'ninjah';
var timeFrame = '1 and a half years';
var eventThatWeNotifyThemAbout = 'you went to Amsterdam with';

// Make the "!" blink over the chrome icon to indicate notification
var ANIMATION_TIME_IN_MS = 500;
var counter = 0;
var notification_interval = null;

function startNotificationAnimation() {
    notification_interval = setInterval(function(){
    if (counter % 2 === 0) {
      chrome.browserAction.setBadgeText({text:""});
    }
    else {
      chrome.browserAction.setBadgeText({text:"!"});
    }
    counter++;
  }, ANIMATION_TIME_IN_MS);
}

// Stop the "!" blinking
function stopNotificationAnimation() {
  clearInterval(notification_interval);
  chrome.browserAction.setBadgeText({text:""});
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting=="sendnotificationbitch") {
      var options = {
        type: "basic",
        title: "It's been exactly " + timeFrame + " since " + eventThatWeNotifyThemAbout + " " + otherPersonsName + "!",
        message: "Message " + otherPersonsGender + " on Facebook?",
        iconUrl: "images/sparkers_icon_128.png"
      };
    chrome.notifications.create("", options, function() {});
    console.log("nOTIFICATION BITCHEZ");
    startNotificationAnimation();
    }
  });

chrome.notifications.onClicked.addListener(function(notificationID) {
  stopNotificationAnimation();
  window.open("http://www.facebook.com/messages/" + otherPersonsFbUrl);
  setTimeout(function() {
    alert("Click the Orange Sparkers Icon in the top right to view mutual content between you and " + otherPersonsName + " to share!");
  }, 2000);
});