ActiveAdmin.register Project do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :title_de, :title_en, :subtitle_de, :subtitle_en, :flickr_set_url, :description_de, :description_en, :slug
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end


form do |f|
  f.inputs "Flickr" do
    f.input :flickr_set_url
  end
  f.inputs "Titles" do
    f.input :title_de 
    f.input :subtitle_de
    f.input :title_en
    f.input :subtitle_en 
    f.input :slug
  end
  f.inputs "Description" do
    f.input :description_de, :input_html => { :class => 'ckeditor' }
    f.input :description_en, :input_html => { :class => 'ckeditor' }
  end
  f.actions
end


end
