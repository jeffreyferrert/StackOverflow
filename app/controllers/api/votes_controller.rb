class Api::VotesController < ApplicationController
    def create
        @vote = Vote.new
        @vote.user_id = current_user.id
        @vote.question_id = params[:question_id]
        if @vote.save
            @question = @vote.question
            render 'api/questions/show', status: :created
        else
            render json: @vote.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @vote = Vote.find_by(user_id: current_user.id, question_id: params[:id])
        @vote.destroy
        @question = @vote.question
        render 'api/questions/show'
      end
end
