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
      title: "It's been 1 year since you sucked ranajays dick",
      message: "Message him on Facebook?",
      iconUrl: "images/sparkers_icon_128.png"
    }
    chrome.notifications.create("", options, function() {});
    console.log("nOTIFICATION BITCHEZ");
  }
  });

chrome.notifications.onClicked.addListener(function(notificationID) {
  window.open("http://www.facebook.com/messages/ranajays");
  startNotificationAnimation();
  setTimeout(function() {
    alert("Click the Orange Sparkers Icon in the top right to view mutual content to share!");
  }, 2000);
})