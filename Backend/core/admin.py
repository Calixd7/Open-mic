from django.contrib import admin
from core.models import User, UserProfile, Genre, Instrument, WantedInstruments, UserFollowing, Messages

# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Genre)
admin.site.register(Instrument)
admin.site.register(WantedInstruments)
admin.site.register(UserFollowing)
admin.site.register(Messages)