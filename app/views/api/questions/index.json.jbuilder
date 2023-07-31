json.questions do 
    
    @questions.each do |question|
        json.set! question.id do 
            json.extract! question, :id, :user_id, :title, :body, :created_at, :updated_at
            json.author question.user.username
            json.answerCount question.answers.length
            json.voteCount question.votes.length
        end
    end

end


