class Api::QuestionsController < ApplicationController
    def index
        if params[:query].present?
            query = "%#{params[:query]}%"
            @questions = Question.where("title ILIKE ? OR body ILIKE ?", query, query).includes(:user, :answers)
        else
            @questions = Question.all.includes(:user, :answers)
        end
    
        render :index
    end

    def show
        @question = Question.find_by(id: params[:id])
        render :show
    end

    def create
        @question ||= Question.new(question_params)

        if @question.save
            render :show
        else
            render json: { errors: @question.errors.full_messages }, status: 422
        end
    end

    def update
        @question = Question.find_by(id: params[:id])
        if @question.update(question_params)
          render :show
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
        params.require(:question).permit(:id, :title, :body, :user_id, :votes_counts)
    end

end
