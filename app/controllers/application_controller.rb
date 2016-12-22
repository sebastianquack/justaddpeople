class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_locale
end

def set_locale
  if params[:locale] == "" || params[:locale].nil?
  	I18n.locale = I18n.default_locale
  else 
  	I18n.locale = params[:locale]
  end
end

def default_url_options(options={})
  { :locale => I18n.locale }
end

