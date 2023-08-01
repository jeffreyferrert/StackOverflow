json.question do
    json.set! @question.id do
        json.extract! @question, :id, :user_id, :title, :body, :votes_counts, :created_at, :updated_at
        json.answer_ids @question.answers.to_a.map{ |answer| answer.id }
        json.author @question.user.username
        json.answerCount @question.answers.length


    end
end
json.answers do
    @question.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :id, :body, :user_id, :question_id, :created_at, :updated_at
        end
    end
end
