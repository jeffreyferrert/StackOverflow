@answers.each do |answer|
    json.set! answer.id do
        json.extract! answer, :id, :body, :created_at, :updated_at
    end
end