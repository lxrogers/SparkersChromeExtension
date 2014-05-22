console.log("popup js");
$('#send-button').click(function() {

	console.log("clicked");

	//send sparkers to the content script
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {sparker_data: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-frc1/t31.0-8/1414994_10151745722260759_963732921_o.jpg"}, function(response) {});
	});
})


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.id1) {
    	console.log( " popup received: " + request.id1);
    }

});