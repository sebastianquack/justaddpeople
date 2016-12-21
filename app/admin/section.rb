ActiveAdmin.register Section do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :menu_de, :menu_en, :title_de, :title_en, :content_de, :content_en, :slug

#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

form do |f|
  f.inputs "Menu" do
    f.input :menu_de
    f.input :menu_en
    f.input :slug
  end
  f.inputs "Content" do
    f.input :title_de
    f.input :content_de, :input_html => { :class => 'ckeditor' }

    f.input :title_en
    f.input :content_en, :input_html => { :class => 'ckeditor' }
  end
  f.actions
end



end
