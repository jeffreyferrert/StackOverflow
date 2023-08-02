json.questions do 
    
    @questions.each do |question|
        json.set! question.id do 
            json.extract! question, :id, :user_id, :title, :body, :votes_counts, :created_at, :updated_at
            json.author question.user.username
            json.email question.user.email
            json.answerCount question.answers.length
        end
    end

end


