class Question < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true #, length: {minimum: 200}

    belongs_to :user
    has_many :answers
end
