class MypageController < ApplicationController
  before_action :authenticate_user!

  def index
    @articles = current_user.articles.all
  end

  def show
  end

end
