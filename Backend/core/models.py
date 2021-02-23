from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

# This code is triggered whenever a new user has been created and saved to the database
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class User(AbstractUser):
    name= models.CharField(max_length=255, blank=True, null=True, default="")

    
    # def __str__(self):
    #     return self.username

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Instrument(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

# class BandGenre(models.Model):
#     band_genre = models.CharField(max_length=100, unique=True)

# class  BandInstrument(models.Model):
#     band_instrument = models.CharField(max_length=100, unique=True )


class UserProfile(models.Model):
    ind = models.ForeignKey(User, related_name = 'user', on_delete=models.CASCADE)
    follows = models.ManyToManyField('self', related_name='followers', symmetrical=False, blank=True)
    ind_bio = models.TextField(blank=True, null=True)
    ind_name = models.CharField(max_length=100, blank=True, null=True)
    ind_instruments = models.ManyToManyField(to=Instrument, related_name='users', blank=True)
    ind_genres =models.ManyToManyField(to=Genre, related_name='users', blank=True)
    ind_zipcode = models.CharField(max_length=100,blank=True, null=True )
    created_at = models.DateTimeField(auto_now_add=True)

class BandProfile(models.Model):
    band = models.ForeignKey(User, on_delete=models.CASCADE)
    band_name = models.CharField(max_length=100, blank=True, null=True)
    band_members = models.CharField(max_length=100, blank=True, null=True)
    band_instruments= models.ManyToManyField(to=Instrument, related_name='bands', blank=True)
    follows =  models.ManyToManyField('self', related_name='followers', symmetrical=False, blank=True)
    band_bio = models.TextField(blank=True, null=True )
    band_members = models.CharField(max_length=100, blank=True, null=True)
    band_genres = models.ManyToManyField(to=Genre, related_name='bands', blank=True)
    band_size = models.CharField(max_length=100, blank=True, null=True)
    band_location = models.CharField(max_length=100, blank=True, null=True)
    years_active = models.CharField(max_length=100, blank=True, null=True)






