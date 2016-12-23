module ApplicationHelper
  def fragment(name)
    f = Fragment.where(:name => name).first
    if f
      return f.content
    else
      return "not found"
    end
  end
  
  def section(slug)
    return Section.where(:slug => slug).first
  end
    
  def main_photo_url(set_id, size)
    return flickr_photo_url(flickr_main_photo_id(set_id), size)
  end
    
  def flickr_photo_url(photo_id, size)
    
    photo = HTTParty.get "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + ENV['JAPFLICKRAPIKEY'] + "&photo_id=" + photo_id + "&format=json&nojsoncallback=1"
    
    #https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    #s	small square 75x75
    #t	thumbnail, 100 on longest side
    #m	small, 240 on longest side
    #z	medium 640, 640 on longest side
    #b	large, 1024 on longest side*
    
    url = "https://farm" + photo["photo"]["farm"].to_s + ".staticflickr.com/" + photo["photo"]["server"].to_s + "/" + photo["photo"]["id"].to_s + "_" + photo["photo"]["secret"] + "_" + size + ".jpg"
    
    return url
    
  end
  
  def flickr_main_photo_id(set_id)
    
    photoset = HTTParty.get "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + ENV['JAPFLICKRAPIKEY'] + "&photoset_id=" + set_id + "&format=json&nojsoncallback=1"
    
    return photoset["photoset"]["primary"]
        
  end
  
  
  def flickr_photo_urls(set_id, size) 
    
    photoset = HTTParty.get "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + ENV['JAPFLICKRAPIKEY'] + "&photoset_id=" + set_id + "&format=json&nojsoncallback=1"
    
    urls = []    
    photoset["photoset"]["photo"].each do |photo|
      urls << flickr_photo_url(photo["id"], size)
    end
    
    return urls
       
  end
    
  
  
  

end
