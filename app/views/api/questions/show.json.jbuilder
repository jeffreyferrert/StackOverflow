# json.question do
    json.extract! @question, :id, :user_id, :title, :body, :created_at, :updated_at
    json.author @question.user.username
# end