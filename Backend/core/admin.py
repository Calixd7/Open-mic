from django.contrib import admin
from core.models import User, UserProfile, BandProfile, Genre, Instrument

# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(BandProfile)
admin.site.register(Genre)
admin.site.register(Instrument)