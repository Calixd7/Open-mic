from django.contrib import admin
from core.models import User, UserProfile, Genre, Instrument

# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Genre)
admin.site.register(Instrument)