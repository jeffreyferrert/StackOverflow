class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.string :body, null: false
      t.references :user, null:false
      t.references :question, null:false

      t.timestamps
    end

    # add_index :answers, [:user_id, :question_id], unique:true
  end
end
