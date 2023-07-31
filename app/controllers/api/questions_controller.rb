class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all.includes(:user, :answers)
        @votes = Vote.all
        render :index
    end

    def show
        @question = Question.find_by(id: params[:id])
        @votes = Question.find_by(id: params[:id])
        render :show
    end

    def create
        @question ||= Question.new(question_params)

        if @question.save
            render json: @question
        else
            render json: { errors: @question.errors.full_messages }, status: 422
        end
    end

    def update
        @question = Question.find_by(id: params[:id])
    
        if @question.update(question_params)
          render json: @question
        else
          render json: { errors: @question.errors.full_messages }, status: 422
        end
      end

    def destroy
        @question = Question.find_by(id: params[:id])
        @question.delete
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :user_id)
    end
end
