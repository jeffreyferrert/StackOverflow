class Change2 < ActiveRecord::Migration[7.0]
  def change
    remove_column :questions, :votesCounts, :integer
    add_column :questions, :votes_counts, :integer, :default => 0
    add_column :answers, :votes_counts, :integer, :default => 0
  end
end
