
/* gets the url of the main photo in the set */
flickrMainPhotoURL = function(setId, scale, apiKey, callback) {
  flickrMainPhotoId(setId, apiKey, function(photoId) {
    flickrPhotoURL(photoId, scale, apiKey, callback)    
  })
}

/* gets the url of the photo given an id */
flickrPhotoURL = function(photoId, scale, apiKey, callback) {

  var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + apiKey + "&photo_id=" + photoId + "&format=json&nojsoncallback=1"
  
  /*
  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
  s	small square 75x75
  t	thumbnail, 100 on longest side
  m	small, 240 on longest side
  z	medium 640, 640 on longest side
  b	large, 1024 on longest side
  */
  
  $.getJSON(apiCall, function(data) {
    var url = "https://farm" + data.photo.farm + ".staticflickr.com/" + data.photo.server + "/" + data.photo.id + "_" + data.photo.secret + "_" + scale + ".jpg"
  
    callback(url)
  })
}

/* gets the photoId of the main photo in a set */
flickrMainPhotoId = function(setId, apiKey, callback) {
  
  var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + apiKey + "&photoset_id=" + setId + "&format=json&nojsoncallback=1"
  
  $.getJSON(apiCall, function(data) {
    callback(data.photoset.primary)
  })
}

/* gets an array of urls of photos in a set */

flickrPhotoURLs = function(setId, scale, apiKey, callback) {
  
  var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + apiKey + "&photoset_id=" + setId + "&format=json&nojsoncallback=1"
  
  $.getJSON(apiCall, function(data) {
    var urls = []
    var length = data.photoset.photo.length    
    data.photoset.photo.forEach(function(item) {
      flickrPhotoURL(item.id, scale, apiKey, function(url) {
        urls.push(url)
        if(urls.length >= length) {
          callback(urls)
        }
      })
    })
  })
     
}
