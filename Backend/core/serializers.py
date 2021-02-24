from rest_framework import serializers
from core.models import User, UserProfile, Instrument, Genre, WantedInstruments

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = [
            'pk', 
            'username',
            "name", 
            'first_name',
            'last_name',
            'email',
            'username', 'password'
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class GenreSerializer (serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['name']

class InstrumentSerializer (serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = [ 'name']




class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')
    genres = serializers.SlugRelatedField(many=True,queryset=Genre.objects.all() ,slug_field='name')
    instruments = serializers.SlugRelatedField(many=True,queryset= Instrument.objects.all() ,slug_field='name')
    wanted_instruments = serializers.SlugRelatedField(many=True, queryset=WantedInstruments.objects.all(), slug_field='name')
    # followers = serializers.StringRelatedField(many=True, read_only=True)
    # follows =serializers.StringRelatedField(many=True,read_only=True )
    class Meta:
        model = UserProfile
        fields = [
            'pk',
            'user',
            "image",
            'bio',
            'name', 
            'instruments',
            'ind_zipcode',
            'genres',
            'created_at',
            'band_size',  
            'band_location',
            'years_active',
            "band_members",
            "individualorband",
            "wanted_instruments",
            "wanted_info"
        ]



# class FollowSerializer(serializers.ModelSerializer):
#     follows = serializers.StringRelatedField(many=True, read_only=True)

#     class Meta:
#         model = UserProfile, BandProfile
#         fields = [
#             'follows'
#         ]



