from django.urls import path,include
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('api/classify',views.tweet_classify,name='tweet_classify'),
    path('api/search/user',views.search_user_tweets,name='user_tweets'),
    path('api/search/keyword',views.search_keyword_tweets,name='keyword_tweets')
]