
console.log("content js");

//FACEBOOK


//send id's to the popup window
chrome.runtime.sendMessage({id1: "lawrencexrogers"}, function(response) {});
console.log("content sent message ");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.sparker_data) {
    	console.log(" content received: " + request.sparker_data);

        var e = $.Event("keypress", { keyCode: 70}); 
      
        $('textarea.uiTextareaAutogrow').focus();
        $('textarea.uiTextareaAutogrow').mousedown();
        $('textarea.uiTextareaAutogrow').click();
        $('textarea.uiTextareaAutogrow').mouseup();      

    	$('textarea.uiTextareaAutogrow').val(request.sparker_data);
        $('textarea.uiTextareaAutogrow').keydown();
        $('textarea.uiTextareaAutogrow').trigger(e);

    }
  });



