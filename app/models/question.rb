class Question < ApplicationRecord
    mount_uploader :question_image, ImageUploader
end
