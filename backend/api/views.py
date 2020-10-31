from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
from .models import Tweet
import pickle
import os
from .processing import text_preprocessing
import requests
from requests_oauthlib import OAuth1
import json


def index(request):
    return HttpResponse('Home')
    # return render(request, "build/index.html")




# Create your views here.
@api_view(['POST'])
def tweet_classify(request):
    try:
        # LOAD A PICKLE
        loaded_model = pickle.load(open(os.path.join(os.getcwd(),'api','model.pkl'),'rb'))

        tweet = Tweet(request.data.get('owner'),request.data.get('text'))
        res = text_preprocessing(tweet.text)
        # CLASSIFY THE TWEET USING ML MODEL
        result = loaded_model.predict([res])[0]
        print("Results: {0}".format(result))

        if( result == 1 ):
            tweet.type = 'Positive Tweet' 
            return JsonResponse({'msg': 'Negative Tweet','error':False,'tweet':tweet.text})
        else:
            tweet.type = 'Negative Tweet'
            return JsonResponse({'msg': 'Positive Tweet','error':False,'tweet': str(tweet.text)})
    except:
        return JsonResponse({'msg': 'Unexpected Error Occurred','error':True,'tweet':str('')})


auth_params = {
    'app_key':  os.environ['CONSUMER_KEY'],
    'app_secret':os.environ['CONSUMER_SECRET'],
    'oauth_token':os.environ['ACCESS_KEY'],
    'oauth_token_secret':os.environ['ACCESS_SECRET']
}
AUTH =  OAuth1 (
    auth_params['app_key'],
    auth_params['app_secret'],
    auth_params['oauth_token'],
    auth_params['oauth_token_secret']
)
BASE_TWITTER_URL = 'https://api.twitter.com/1.1/'

@api_view(['POST'])
def search_user_tweets(request):
    try:
        # LOAD A PICKLE
        loaded_model = pickle.load(open(os.path.join(os.getcwd(),'api','model.pkl'),'rb'))
        username = request.data.get('user')
        searchQuery = {'screen_name':username,'count':10,'tweet_mode':'extended'}
        result = requests.get(BASE_TWITTER_URL + 'statuses/user_timeline.json',searchQuery,auth=AUTH)
        tw = result.json()

        text_processed_tweets = []
        for t in tw:
            res = text_preprocessing(t['full_text'])
            text_processed_tweets.append(res)
        
        results = loaded_model.predict(text_processed_tweets)
        i = 0
        data = []
        for t in tw:
            tweet = Tweet(username,t['full_text'])
            tweet.type =  'Negative Tweet' if ( results[i] ) else 'Positive Tweet'
            data.append({
                'user': tweet.owner,
                'text':tweet.text,
                'type': tweet.type
            })
            i += 1

        return JsonResponse({"error":False,"msg": "Data Processed","data":data})
    except:
        return JsonResponse({"error":True,"msg": "Unexpected Error Occurred.","data":[]})


@api_view(['POST'])
def search_keyword_tweets(request):
    data = []
    # LOAD THE  PICKLE MODEL
    loaded_model = pickle.load(open(os.path.join(os.getcwd(),'api','model.pkl'),'rb'))

    keyword = request.data.get('keyword')
    searchURL = BASE_TWITTER_URL + 'search/tweets.json'
    searchQuery = {'q': keyword + ' -filter:replies -filter:retweets','result_type':'recent','tweet_mode':'extended','lang':'en','count':20}

    res = requests.get(searchURL,params=searchQuery,auth=AUTH)
    tweets = res.json()
    text_processed_tweets = []
    allProcessedTweets = []
    # DATA PROCESSING
    for tw in tweets['statuses']:
        newTweet = Tweet(tw['user']['screen_name'],tw['full_text'])
        allProcessedTweets.append(newTweet)

        r = str(text_preprocessing(tw['full_text']))
        text_processed_tweets.append(r)

    model_results = loaded_model.predict(text_processed_tweets)
    print(model_results)

    i = 0
    for mr in model_results:
        allProcessedTweets[i].type = 'Negative Tweet' if mr == 1 else 'Positive Tweet'
        data.append({
            'user': allProcessedTweets[i].owner,
            'text':allProcessedTweets[i].text,
            'type': allProcessedTweets[i].type
        })
        i += 1
    return JsonResponse({"error":False,"msg": "Data Processed","data":data})
