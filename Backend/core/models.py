from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User



class User(AbstractUser):
    name= models.CharField(max_length=255, blank=true, null=True, default="")

    
    # def __str__(self):
    #     return self.username

class UserProfile(models.Model):
    user = models.ForeignKey(User, unique = True, related_name = 'user', on_delete=models.CASCADE)
    follows = models.ManyToManyField('self', related_name='followers', symmetrical=False, blank=True)
    bio = models.TextField(blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    instrument = models.CharField(max_length=100, blank=True, null=True)
    genre = models.CharField(max_length=100, blank=True, null=True)
    zipcode = models.CharField(max_length=100,blank=True, null=True )
    created_at = models.DateTimeField(auto_now_add=True)

class BandProfile(models.Model):
    band = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
    band_name = models.CharField(max_length=100, blank=True, null=True)
    band_members = models.CharField(max_length=100, blank=True, null=True)
    band_instruments = models.CharField(max_length=100, blank=True, null=True)
    follows =  models.ManyToManyField('self', related_name='followers', symmetrical=False, blank=True)
    band_bio = models.TextField(blank=True, null=True )
    band_members = models.CharField(max_length=100, blank=True, null=True)
    band_genre = models.CharField(max_length=100, blank=True, null=True)
    band_size = models.CharField(max_length=100, blank=True, null=True)
    band_location = models.CharField(max_length=100, blank=True, null=True)
    years_active = models.CharField(max_length=100, blank=True, null=True)











