
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
  overlay.setAttribute('style', 'background-color: #000;opacity: .7;filter: alpha(opacity=70);position: fixed; top: 0; left: 0;width: 100%; height: 100%;z-index: 2147483646;text-align: center;color: white;font-size: 36px;');
  document.body.appendChild(overlay);

  var guideMessageDiv = document.createElement("div");
  guideMessageDiv.setAttribute('style', 'width:60%;');
  overlay.appendChild(guideMessageDiv);

  // Overlay Paragraph
  var overlayParagraph1 = document.createElement("p");
  overlayParagraph1.innerHTML = '[1] Click the orange <strong>Sparkers</strong> icon<br/><br/><br/><br/>';
  guideMessageDiv.appendChild(overlayParagraph1);

  // Overlay paragraph 2
  var overlayParagraph2 = document.createElement("p");
  overlayParagraph2.innerHTML = 'in the <strong>top right</strong> to view and copy mutual content between you two!';
  guideMessageDiv.appendChild(overlayParagraph2);

  // Sparkers icon image
  var iconImage = document.createElement("img");
  iconImage.src = 'http://i.imgur.com/r2GDh5e.png';
  iconImage.setAttribute("id","iconImage");
  iconImage.setAttribute('style', 'position: fixed; top: 100px; left: 300px;z-index: 2147483647;');
  // iconImage.setAttribute('style', 'z-index: 2147483647; opacity: 1.0; filter: alpha(opacity=100); margin: 0 auto;');
  document.body.appendChild(iconImage);

  // Add arrow1
  var arrow1 = document.createElement("img");
  arrow1.setAttribute("id","arrow1");
  arrow1.setAttribute('style', 'position: fixed; top: 0px; right: 100px;z-index: 2147483647;');
  arrow1.src = "http://i.imgur.com/ZodwLNm.png";
  document.body.appendChild(arrow1);

  // Add arrow2
  var arrow2 = document.createElement("img");
  arrow2.setAttribute("id","arrow2");
  arrow2.setAttribute('style', 'position: fixed; top: 10px; right: 70px;z-index: 2147483647;');
  arrow2.src = "http://i.imgur.com/IxnI9O0.png";
  document.body.appendChild(arrow2);

  // Paragraph after arrow 2
  var guideMessageDiv2 = document.createElement("div");
  guideMessageDiv2.setAttribute('id', 'guideMessageDiv2');
  guideMessageDiv2.setAttribute('style', 'width:15%; position: fixed; right: 0px; top:170px; font-size: 20px;');
  overlay.appendChild(guideMessageDiv2);
  var paraAfterArrow2 = document.createElement("p");
  paraAfterArrow2.innerHTML = '[2] Sparkers shows your mutual content';
  guideMessageDiv2.appendChild(paraAfterArrow2);

  // Add sparkers panel
  var sparkersPanel = document.createElement("img");
  sparkersPanel.setAttribute("id","sparkersPanel");
  sparkersPanel.setAttribute('style', 'position: fixed; top: 250px; right: 0px;z-index: 2147483647;');
  sparkersPanel.src = "http://i.imgur.com/fdm4v7b.png";
  document.body.appendChild(sparkersPanel);

  // Add arrow3
  var arrow3 = document.createElement("img");
  arrow3.setAttribute("id","arrow3");
  arrow3.setAttribute('style', 'position: fixed; top: 450px; right: 200px;z-index: 2147483647;');
  arrow3.src = "http://i.imgur.com/LFnv91T.png";
  document.body.appendChild(arrow3);

  // Paragraph after arrow 3
  var guideMessageDiv3 = document.createElement("div");
  guideMessageDiv3.setAttribute('id', 'guideMessageDiv3');
  guideMessageDiv3.setAttribute('style', 'width:25%; position: fixed; right: 220px; top:340px; font-size: 26px;');
  overlay.appendChild(guideMessageDiv3);
  var paraAfterArrow3 = document.createElement("p");
  paraAfterArrow3.innerHTML = '[3] Click to copy a link to old content and send it in Facebook Messenger';
  guideMessageDiv3.appendChild(paraAfterArrow3);
  
  
  

  // click to restore page
  $(document).click(function() {
    restore();
  });
  // overlay.onclick=restore;
}

// restore page to normal
function restore() {
  document.body.removeChild(document.getElementById("overlay"));
  document.body.removeChild(document.getElementById("iconImage"));
  document.body.removeChild(document.getElementById("arrow1"));
  document.body.removeChild(document.getElementById("arrow2"));
  document.body.removeChild(document.getElementById("arrow3"));
  document.body.removeChild(document.getElementById("sparkersPanel"));
  
}
// ********************************************************
// ********************************************************



window.onload = function(){ // this could be done faster with the livequery() plugin for jquery
    var facebookMsgsURL = "https://www.facebook.com/messages/";
    console.log("document.URL is " + document.URL);
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
    chrome.runtime.sendMessage(allData, function(response) {});

    //This is the data from the Facebook SDK
  },false);
}

