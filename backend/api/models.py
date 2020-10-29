from django.db import models
from django.utils import timezone

# Create your models here.
class Tweet(models.Model):
    text = models.CharField(max_length=25000)
    owner = models.CharField(max_length=25000)
    type = models.CharField(max_length=25000,default='')
    date = models.DateTimeField(default=timezone.now)

    def __init__(self,owner,text):
        self.text = text
        self.owner = owner

    def __str__(self):
        return self.owner   

    


