
if (document.URL == "https://www.google.com/") {
    setTimeout(function() {
        chrome.runtime.sendMessage({greeting: "sendnotificationbitch"}, function(response) {
      
        });
    }, 3000);
}


function getOtherID() {
    var url = document.URL;
    var graphurl = "https://graph.facebook.com/" + url.substring(url.lastIndexOf("/") + 1);
    $.get(
    graphurl,
    {},
    function(data) {
       console.log(data.id);
       // ** GET FACEBOOK DATA HERE **
    }
    );
}
