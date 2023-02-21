class RemoveStringFromTags < ActiveRecord::Migration[6.0]
  def change
    remove_column :tags, :string, :string
  end
end
