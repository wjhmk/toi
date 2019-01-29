class AddDetailsToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :level, :integer
    add_column :questions, :category, :integer
  end
end
