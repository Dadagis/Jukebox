class AddTitleToMusics < ActiveRecord::Migration[6.0]
  def change
    add_column :musics, :title, :string
  end
end
