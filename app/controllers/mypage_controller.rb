class MypageController < ApplicationController
  before_action :authenticate_user!

  def index

    articles = current_user.articles.all.preload(:tags)

    articles = articles.where('title LIKE ?',"%#{params[:title]}%") if params[:title] != nil

    @articles = articles.page(params[:page])
  end

  def show
  end

end
