
var sparksTemplate = $('#sparks-template');

var templates = {
        renderSparksImages: Handlebars.compile(sparksTemplate.html())
};

var html = templates.renderSparksImages({
  sparks: [
  {
    "link": "https://www.facebook.com/photo.php?v=10150631488750759",
    "video_embed": "<iframe src=\"https://www.facebook.com/video/embed?video_id=10150631488750759\" width=\"1280\" height=\"720\" frameborder=\"0\"></iframe>",
    "img_small": "https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-ash3/t15.0-10/409985_10150631492520759_10150631488750759_36830_706_t.jpg",
    "text": "like a g6"
  },
  {
    "link": "www.facebook.com/3205040723918",
    "text": "Here's to the 26 awesome individuals pledging ΦΚΨ this year. Live ever, die never.\n\nAlso, special kudos to Kyle Archie, Jordan Sanches, Lawrence Rogers, and Vivek Nair."
  },
  {
    "link": "www.facebook.com/719353988120814",
    "img_big": "https://scontent-a.xx.fbcdn.net/hphotos-ash3/t1.0-9/c85.0.100.100/p100x100/10312621_10203704853892665_1477548712386939490_n.jpg",
    "img_small": "https://scontent-a.xx.fbcdn.net/hphotos-ash3/t1.0-9/c43.0.50.50/p50x50/10312621_10203704853892665_1477548712386939490_n.jpg",
    "text": "Phi Psi Pledges Present: Fratlantis"
  },
  {
    "link": "www.facebook.com/300070610151693",
    "img_big": "https://scontent-b.xx.fbcdn.net/hphotos-prn1/t1.0-9/c42.0.100.100/p100x100/10304713_10200967875518741_4168804055104106429_n.jpg",
    "img_small": "https://scontent-b.xx.fbcdn.net/hphotos-prn1/t1.0-9/c21.0.50.50/p50x50/10304713_10200967875518741_4168804055104106429_n.jpg",
    "text": "Stanford Harmonics: A Call to Harmz"
  },
  {
    "link": "www.facebook.com/1381363898790878",
    "img_big": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/c98.0.100.100/p100x100/10258163_844840408878434_5580634828584971986_n.jpg",
    "img_small": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/c49.0.50.50/p50x50/10258163_844840408878434_5580634828584971986_n.jpg",
    "text": "Stanford Shakespeare Company Presents: The Winter's Tale"
  },
  {
    "link": "www.facebook.com/782410115112144",
    "img_big": "https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1.0-9/c41.0.100.100/p100x100/10330387_10203517360431969_7758106994783597401_n.jpg",
    "img_small": "https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/c21.0.50.50/p50x50/10330387_10203517360431969_7758106994783597401_a.jpg",
    "text": "Phi Psi Presents: Miami Vice"
  },
  {
    "link": "www.facebook.com/709481949094984",
    "img_big": "https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/c0.10.100.100/10297849_686776638048706_7983513359668996732_s.jpg",
    "img_small": "https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/c0.5.50.50/p50x50/10297849_686776638048706_7983513359668996732_t.jpg",
    "text": "ART AFTER DARK"
  },
  {
    "link": "https://www.facebook.com/photo.php?fbid=10151069063608976&set=a.490798108975.289241.713803975&type=1",
    "img_big": "https://scontent-a.xx.fbcdn.net/hphotos-ash2/t1.0-9/s720x720/577972_10151069063608976_277615520_n.jpg",
    "img_small": "https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/577972_10151069063608976_277615520_t.jpg",
    "text": "We're letting the animals out"
  },
  {
    "link": "https://www.facebook.com/photo.php?fbid=3169187467609&set=a.1403703451612.2048030.1203120194&type=1",
    "img_big": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/s720x720/548102_3169187467609_1819168570_n.jpg",
    "img_small": "https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/548102_3169187467609_1819168570_t.jpg",
    "text": ""
  },
  {
    "link": "https://www.facebook.com/photo.php?fbid=10150626232465759&set=a.10150626232405759.387253.639295758&type=1",
    "img_big": "https://scontent-a.xx.fbcdn.net/hphotos-ash3/t1.0-9/s720x720/523383_10150626232465759_2116180134_n.jpg",
    "img_small": "https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/523383_10150626232465759_2116180134_t.jpg",
    "text": "Veritable Quandary"
  }
]
});

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
