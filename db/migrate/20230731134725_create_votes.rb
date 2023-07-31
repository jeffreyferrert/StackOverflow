class CreateVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :votes do |t|
      t.references :user
      t.references :question
      t.timestamps
    end

    # add_index :votes, [:user_id, :question_id], unique: true
  end
end
