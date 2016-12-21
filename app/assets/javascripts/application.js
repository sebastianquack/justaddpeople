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
  {num: 72, en:"Sticks", de:"Stöcke"}
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

var societyCards = [
  {en: "vegan", de: "Vegan/e"},  
  {en: "terror proof", de: "Terror-sichere/r"},
  {en: "brutalist", de: "Brutalistische/r"}        
]

var architectureCards = [
  {en: "bus stop", de: "Bushaltestelle"},  
  {en: "windmill", de: "Windmühle"},
  {en: "kiosk", de: "Späti"}    
]

function handleRandomize() {
  $(".what-society-card .card-content").html(societyCards[Math.floor(Math.random() * societyCards.length)][currentLocale])
  $(".what-architecture-card .card-content").html(architectureCards[Math.floor(Math.random() * architectureCards.length)][currentLocale])
}
