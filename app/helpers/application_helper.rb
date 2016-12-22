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

end
