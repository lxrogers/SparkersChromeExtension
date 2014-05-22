console.log("popup js");
$('#send-button').click(function() {

	//send sparkers to the content script
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {sparker_data: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-frc1/t31.0-8/1414994_10151745722260759_963732921_o.jpg"}, function(response) {});
	});
})

$('#notification-button').click(function() {

  var options = {
    type: "basic",
    title: "YOU HAVEN'T TALKED TO RANAJAY TODAY BITCH",
    message: "TALK TO HIM ON FACEBOOK?",
    iconUrl: "icon.png"
  }
  chrome.notifications.create("", options, function() {});
  console.log("nOTIFICATION BITCHEZ");
})


//listener for notification clicked
chrome.notifications.onClicked.addListener(function(notificationID) {
  window.open("http://www.facebook.com/messages/ranajays");

})

// Copy text to the Clipboard function
// uses 'url' input element to select text
// parameters: text - text to be copied to the clipboard
function copyToClipboard( text )
{
  var input = document.getElementById( 'url' );
  input.value = text;
  input.focus();
  input.select();
  document.execCommand( 'Copy' );
}


//listener for content js messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.id1) {
    	console.log( " popup received: " + request.id1);
    }
    //show data in popup.html
    
    //add click listeners to data
        //clicked'
        //copy to clipbaord show ("it has been copied paste")


});