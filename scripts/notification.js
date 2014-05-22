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

})