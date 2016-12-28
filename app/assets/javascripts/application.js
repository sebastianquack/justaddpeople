// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// locale
var currentLocale = "en"

/* init on page load */

$(document).ready(function() {
  currentLocale = $(".language-selection").data("locale")
  $("span.set-locale").click(function(event) {
    handleLanguageChange(event)
  })
  
  setInterval(updateWhatsInTheBox, 1000)

  handleRandomize()
  $(".what-randomize-button").click(function(event) {
    handleRandomize()
  })

})

function handleLanguageChange(event) {
  currentLocale = $(".language-selection").data("locale")
  newLocale = $(event.target).data("locale")
  if(newLocale != currentLocale) {
    pathArray = location.pathname.split("/")
    pathArray[1] = newLocale
    newPath = pathArray.join("/")
    window.location.href = newPath
  }
}

var whatContents = [
  {num: 72, en:"Balls", de:"Bälle"},
  {num: 72, en:"Sticks", de:"Stöcke"},
  {num: 144, en:"Cards", de:"Karten"},
]  
var whatIndex = 0

/* update what's in the box */

function updateWhatsInTheBox() {
  $(".what-contents .num").html(whatContents[whatIndex].num)
  $(".what-contents .item").html(whatContents[whatIndex][currentLocale])
  
  whatIndex++
  if(whatIndex >= whatContents.length) {
    whatIndex = 0
  }
}

/* generate random missions */

function addWithLongClass(text, element) {
  if(text.length > 12) {
    element.addClass("long")
  }
  element.html(text)
}

function handleRandomize() {
  var societyIndex = Math.floor(Math.random() * societyCards.length)
  var architectureIndex = Math.floor(Math.random() * architectureCards.length)

  var architectureContent = architectureCards[architectureIndex][currentLocale]
  var societyContent = societyCards[societyIndex][currentLocale]
  
  // add german adjective form if needed
  if(currentLocale == "de" && !societyCards[societyIndex].flip && societyCards[societyIndex].de_gender) {
    if(architectureCards[architectureIndex].de_gender == "m") {
      societyContent += "r"
    }
    if(architectureCards[architectureIndex].de_gender == "s") {
      societyContent += "s"
    }
  }

  $(".what-society-card, .what-architecture-card").removeClass("what-society-card-color")
  $(".what-society-card, .what-architecture-card").removeClass("what-architecture-card-color")
  $(".card-content").removeClass("long")
    
  if(!societyCards[societyIndex].flip) {
    $(".what-society-card").addClass("what-society-card-color")
    $(".what-architecture-card").addClass("what-architecture-card-color")
    addWithLongClass(societyContent, $(".what-society-card .card-content"))
    addWithLongClass(architectureContent, $(".what-architecture-card .card-content"))
  } else {
    $(".what-society-card").addClass("what-architecture-card-color")
    $(".what-architecture-card").addClass("what-society-card-color")
    addWithLongClass(architectureContent, $(".what-society-card .card-content"))
    addWithLongClass(societyContent, $(".what-architecture-card .card-content"))
  }

}
