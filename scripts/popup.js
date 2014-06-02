
var sparksTemplate = $('#sparks-template');

var templates = {
        renderSparksImages: Handlebars.compile(sparksTemplate.html())
};

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "getData"}, function(response) {
    console.log("response reeived from content script");
    console.log(response);
    if (response.data) {
      renderSparks(response.data);
    }
  });
});
function renderSparks(data) {
  var html = templates.renderSparksImages({sparks: data});
    $('#sparks').html(html);// i heard you like html
    $('.spark-container').mouseover(function() {
      //$('.overlay', this).css({opacity: 1});
      $('.spark', this).css({opacity: .2});
      $('.copy', this).css({opacity: 1});
    })

    $('.spark-container').mouseout(function() {
     //$('.overlay', this).css({opacity: 0});
      $('.spark', this).css({opacity: 1});
      $('.copy', this).css({opacity: 0});
    })

    $('.spark-container').click(function() {
      copyTextToClipboard($('.hidden', this).html());
    })
}
function copyTextToClipboard(text) {
  var copyFrom = $('<textarea/>');
  copyFrom.text(text);
  $('body').append(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
  window.close();
}

//listener for content js messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.data) {
      console.log( " popup received: " + request.data);
      renderSparks(request.data);
    }
    
});

$(function() {
  $('#linker').click(function() {
     chrome.tabs.create($(this).href);
  });
});