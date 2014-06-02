
console.log(document.URL);

if (document.URL === "https://www.facebook.com/") {
    setTimeout(function() {
        chrome.runtime.sendMessage({greeting: "sendnotificationbitch"}, function(response) {
      
        });
    }, 3000);
}
else {

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
}


// ********************************************************
// ********************************************************
// Main Guide Page Changes
function showGuidePage() {
  console.log('Showing Guide Page!');
  // create overlay and append to page
  var overlay = document.createElement("div");
  overlay.setAttribute("id","overlay");
  document.body.appendChild(overlay);

  var firstGuideMessageDiv = document.createElement("div");
  firstGuideMessageDiv.setAttribute('style', 'width:60%;');
  overlay.appendChild(firstGuideMessageDiv);

  // Overlay Paragraph
  var overlayParagraph1 = document.createElement("p");
  overlayParagraph1.innerHTML = 'Click the orange <strong>Sparkers</strong> icon';
  firstGuideMessageDiv.appendChild(overlayParagraph1);

  // Sparkers icon image
  var iconImage = document.createElement("img");
  iconImage.src = 'http://i.imgur.com/r2GDh5e.png';
  firstGuideMessageDiv.appendChild(iconImage);

  // Overlay paragraph 2
  var overlayParagraph2 = document.createElement("p");
  overlayParagraph2.innerHTML = 'in the <strong>top right</strong> to view and copy mutual content between you two!';
  firstGuideMessageDiv.appendChild(overlayParagraph2);

  // Add styles
  overlay.setAttribute('style', 'background-color: #000;opacity: .7;filter: alpha(opacity=70);position: fixed; top: 0; left: 0;width: 100%; height: 100%;z-index: 2147483646;text-align: center;color: white;font-size: 36px;');
  // img.setAttribute('style', ' position: absolute;z-index: 2147483647;left: 40%;top: 40%;margin: 0 auto;');
  
  // click to restore page
  $(document).click(function() {
    restore();
  });
  // overlay.onclick=restore;
}

// restore page to normal
function restore() {
  document.body.removeChild(document.getElementById("overlay"));
}
// ********************************************************
// ********************************************************



window.onload = function(){ // this could be done faster with the livequery() plugin for jquery
    var facebookMsgsURL = "https://www.facebook.com/messages/";
    if (document.URL.length >= facebookMsgsURL.length && document.URL.substring(0, facebookMsgsURL.length) == facebookMsgsURL) {
      showGuidePage(); // Show the guide page on load
      console.log("adding shit.");
      elt = document.createElement('iframe');
      elt.id = 'facebook_load_frame';
      console.log($('._r7 a').html());
      elt.src = 'https://www.stanford.edu/~ranajays/iframe.html?id='+$('._r7 a').html();
      elt.style = ' width:1px; height:1px; border:0; position:absolute; top:0; left:0; display:none;';
      document.getElementsByTagName('body')[0].appendChild(elt);
    }
};


if (document.URL !== "https://www.facebook.com/") {
  // Message passing API from David Walsh at http://davidwalsh.name/window-iframe
  // Create IE + others compatible event handler
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  // Listen to message from child window
  eventer(messageEvent,function(e) {
    allData = e.data;

    //send message
    chrome.runtime.sendMessage({data: allData}, function(response) {});

    //This is the data from the Facebook SDK
  },false);
}

