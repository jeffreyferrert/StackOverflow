@answers.each do |answer|
    json.set! answer.id do
        json.extract! answer, :id, :body, :user_id, :question_id, :votes_counts, :created_at, :updated_at
        json.author answer.user.username

    end
end