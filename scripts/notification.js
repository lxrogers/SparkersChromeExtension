// var otherPersonsName = 'Simon';
// var otherPersonsGender = 'him';
// var otherPersonsFbUrl = 'ninjah';
// var timeFrame = '1 and a half years';
// var eventThatWeNotifyThemAbout = 'you went to Amsterdam with';
var choices = [{name: 'Kai', gender: 'him', url: 'neokaiyuan', time: '1 and a half years', image: 'http://scontent-a.xx.fbcdn.net/hphotos-xaf1/t1.0-9/p180x540/1003129_10151528882758992_1619532225_n.jpg', eventName: 'you went to Amsterdam with'},
              {name:'Nusi', gender: 'her', url: 'ncvue', time: '3 months', image: 'http://scontent-a.xx.fbcdn.net/hphotos-xaf1/t1.0-9/s720x720/1689775_10203686688630309_4052531959958338410_n.jpg', eventName: 'you went to senior formal with'},
              {name:'Sharleen', gender: 'her', url: 'tu.Sharleen', time: '3 years', image: 'http://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/10265393_10203790822153582_8767969687065352491_o.jpg', eventName: 'you lived in Junipero with'}];

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
    console.log("message caught");
    console.log(request.greeting);
    if (request.greeting=="sendnotificationbitch") {
      for (var i = 0; i < choices.length; i++) {
        var options = {
          type: "image",
          title: "It's been exactly " + choices[i].time + " since " + choices[i].eventName + " " + choices[i].name + "!",
          message: "Message " + choices[i].gender + " on Facebook?",
          iconUrl: "images/sparkers_icon_128.png",
          imageUrl: choices[i].image
        };

        chrome.notifications.create(i.toString(), options, function() {});
      }

      console.log("nOTIFICATION BITCHEZ");
      startNotificationAnimation();
    }
  });

chrome.notifications.onClicked.addListener(function(notificationID) {
  stopNotificationAnimation();
  window.open("http://www.facebook.com/messages/" + choices[parseInt(notificationID)].url);
  // setTimeout(function() {
  //   alert("Click the Orange Sparkers Icon in the top right to view mutual content between you and " + choices[parseInt(notificationID)].name + " to share!");
  // }, 2000);
});