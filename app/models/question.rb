class Question < ApplicationRecord
    mount_uploader :question_image, ImageUploader

    # def next
    #   Question.where("id > ?", self.id).order("id ASC").first
    # end

end
