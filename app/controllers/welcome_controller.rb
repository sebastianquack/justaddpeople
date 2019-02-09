class WelcomeController < ApplicationController
  def index
    @sections = Section.all
    @projects = Project.all.reverse
  end
end
