from django.contrib import admin
from core.models import User, UserProfile, Genre, Instrument, WantedInstruments

# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Genre)
admin.site.register(Instrument)
admin.site.register(WantedInstruments)