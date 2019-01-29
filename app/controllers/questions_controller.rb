class QuestionsController < ApplicationController

    def index
      @questions = Question.all
    end

    def new
      @question = Question.new
    end

    def create
      @question = Question.new(question_params)

        if @question.save
            redirect_to @question
        end

    end

    private
          def question_params
            params.require(:question).permit(:question_image, :answer, :column, :hint, )
          end
end
