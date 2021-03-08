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
OPTIONS = (
    ("Individual", "Individual"),
    ("Band", "Band"),  
)

class User(AbstractUser):
    name= models.CharField(max_length=255, blank=True, null=True, default="")
    profile_complete = models.BooleanField(default=False)

   
class UserFollowing(models.Model):
    user= models.ForeignKey(User, related_name="following", on_delete=models.CASCADE)
    following_user = models.ForeignKey(User, related_name="followers", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user','following_user'],  name="unique_followers")
        ]

        ordering = ["-created"]
class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Instrument(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class WantedInstruments(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=True, null=True)

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.ForeignKey(User, related_name = 'user', on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to='uploads/')
    bio = models.TextField(blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    instruments = models.ManyToManyField(to=Instrument, related_name='users', blank=True)
    genres = models.ManyToManyField(to=Genre, related_name='users', blank=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    website = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    years_active = models.CharField(max_length=100, blank=True, null=True)
    vacancy = models.BooleanField(default=False)
    individualorband = models.CharField(max_length=100, choices=OPTIONS, null=True)
    wantedinstruments = models.ManyToManyField(to=WantedInstruments,related_name='users',  blank=True)
    wanted_info = models.CharField(max_length=500, blank=True, null=True )
    spotify = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
   

class Messages(models.Model):
    subject = models.TextField(max_length=100, blank=True)
    content = models.TextField(max_length=10000, blank=True)
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True, related_name="sender")
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True, related_name="receiver")   
    name = models.ForeignKey(UserProfile, on_delete=models.CASCADE, blank=True, null=True)
    # display_for_user = models.ManyToManyField(User, related_name='display',null=True)
    receiver_name = models.TextField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to="uploads/", null=True, blank=True)
    read = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)
