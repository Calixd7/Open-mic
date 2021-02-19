from django.contrib import admin
from core.models import User, UserProfile, BandProfile

# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(BandProfile)