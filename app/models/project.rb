class Project < ActiveRecord::Base
  translates :title, :subtitle, :description
end
