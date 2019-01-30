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

    def show
      @question = Question.find(params[:id])
    end

    def level1
      @questions = Question.where(level: 1)
    end

    def level2
      @questions = Question.where(level: 2)
    end

    def level3
      @questions = Question.where(level: 3)
    end

    def radian_frequency_method
      @questions = Question.where(category: 1)
    end

    def addition_theorem
      @questions = Question.where(category: 2)
    end

    def interrelationship
      @questions = Question.where(category: 3)
    end

    def double_angle
      @questions = Question.where(category: 4)
    end

    def synthesis
      @questions = Question.where(category: 5)
    end

    private
          def question_params
            params.require(:question).permit(:question_image, :answer, :column, :hint, :level, :category)
          end
end
