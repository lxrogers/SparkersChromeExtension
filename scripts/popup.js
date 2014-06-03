
var sparksTemplate = $('#sparks-template');

var templates = {
        renderSparksImages: Handlebars.compile(sparksTemplate.html())
};
Handlebars.registerHelper('limit', function(str) {
  if (str.length > 100)
    return str.substring(0,100) + '...';
  return str;
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "getData"}, function(response) {
    console.log("response reeived from content script");
    console.log(response);
    if (response.data.allData) {
      renderSparks(response.data);
    }
  });
});
function renderSparks(data) {
  var html = templates.renderSparksImages(data);
    $('#sparks').html(html);// i heard you like html
    $('.spark-container').mouseover(function() {
      //$('.overlay', this).css({opacity: 1});
      $('.spark', this).css({opacity: .2});
      $('.copy', this).css({opacity: 1});
    });

    $('.spark-container').mouseout(function() {
     //$('.overlay', this).css({opacity: 0});
      $('.spark', this).css({opacity: 1});
      $('.copy', this).css({opacity: 0});
    });

    $('.spark-container').click(function() {
      copyTextToClipboard($('.hidden', this).html());
    });

    $('.spark-container').first().css("border-color", "#FF7A00");
    $('.spark-container').first().css("border-width", "5px");
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
    console.log(request);
    if (request.allData) {
      console.log( " popup received: " + request);
      renderSparks(request);
    }
    
});

$(function() {
  $('#linker').click(function() {
     chrome.tabs.create($(this).href);
  });
});