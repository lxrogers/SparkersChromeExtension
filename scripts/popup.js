
var sparksTemplate = $('#sparks-template');

var templates = {
        renderSparksImages: Handlebars.compile(sparksTemplate.html())
};

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "getData"}, function(response) {
    console.log("response reeived from content script");
    console.log(response);
    var html = templates.renderSparksImages({sparks: response.data});
    $('#sparks').html(html);// i heard you like html
    $('.spark-container').mouseover(function() {
      $('.overlay', this).css({opacity: 1});
      $('.spark', this).css({opacity: .2});
    })

    $('.spark-container').mouseout(function() {
      $('.overlay', this).css({opacity: 0});
      $('.spark', this).css({opacity: 1});
      $('.copied', this).css({opacity: 0});
    })

    $('.spark-container').click(function() {
      copyTextToClipboard($('.hidden', this).html());

      $('.copied').css({opacity: 0});

      $(".copied", this).css({opacity: 1});
      $(".overlay", this).css({opacity: 0});
      $(".spark", this).css({opacity: .2});
    })
  });
});

function copyTextToClipboard(text) {
  var copyFrom = $('<textarea/>');
  copyFrom.text(text);
  $('body').append(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
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
