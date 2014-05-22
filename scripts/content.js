
    console.log("HI L)");

if (document.URL == "https://www.google.com/") {
    setTimeout(function() {
        chrome.runtime.sendMessage({greeting: "sendnotificationbitch"}, function(response) {
      
        });
    }, 3000);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "getData")
      sendResponse({data: allData});
  });


window.fbAsyncInit = function() {
        FB.init({
          appId      : '{your-app-id}',
          xfbml      : true,
          version    : 'v2.0'
        });
      };

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var allData = [];

window.onload = function(){ // this could be done faster with the livequery() plugin for jquery
    var url = document.URL;
    var graphurl = "https://graph.facebook.com/" + url.substring(url.lastIndexOf("/") + 1);
    $.get(
    graphurl,
    {},
    function(data) {
        console.log(data.id);
        console.log("adding shit.")
        elt = document.createElement('iframe');
        elt.id = 'facebook_load_frame';
        elt.src = 'https://www.stanford.edu/~ranajays/iframe.html?id='+data.id;
        elt.style = ' width:1px; height:1px; border:0; position:absolute; top:0; left:0; display:none;'
        document.getElementsByTagName('body')[0].appendChild(elt);
       // ** GET FACEBOOK DATA HERE **
    }
    );    
};

// Message passing API from David Walsh at http://davidwalsh.name/window-iframe
// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// Listen to message from child window
eventer(messageEvent,function(e) {
 allData = e.data;
 //This is the data from the Facebook SDK
},false);


function getOtherID() {
    
}
