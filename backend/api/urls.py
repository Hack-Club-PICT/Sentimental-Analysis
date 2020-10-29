from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('classify/',views.tweet_classify,name='tweet_classify'),
    path('search/user',views.search_user_tweets,name='user_tweets'),
    path('search/keyword',views.search_keyword_tweets,name='keyword_tweets')
]