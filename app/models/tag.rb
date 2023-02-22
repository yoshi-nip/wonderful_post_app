class Tag < ApplicationRecord
  validates :name ,presence: true

  has_many :article_tags
  # dependent: :destroy
  has_many :articles, :through => :article_tags
end
