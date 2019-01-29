class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question_image
      t.integer :answer
      t.string :column
      t.string :hint

      t.timestamps
    end
  end
end
