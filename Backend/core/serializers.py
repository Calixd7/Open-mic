from rest_framework import serializers
from core.models import User, UserProfile, BandProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = [
            'pk', 
            'username', 
            'first_name',
            'last_name',
        ]


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')
    followers = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = UserProfile
        fields = [
            'pk',
            'user',
            'bio',
            'name', 
            'instrument',
            'zipcode',
            'genre',
            'followers'

        ]

class GenreSerializer (serializers.ModelSerializer):
    class Meta:
        model = BandProfile
        fields = ['band_genre']

class InstrumentSerializer (serializers.ModelSerializer):
    class Meta:
        Model = BandProfile
        fields = ['band_instruments']

class BandProfileSerializer(serializers.ModelSerializer):
    band_genre = GenreSerializer(many=True)
    band_instruments =InstrumentSerializer(many=True)
    follows = serializers.StringRelatedField(many=True, read_only=True)
    followers = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = BandProfile  
        fields = [
            'pk',
            'band',
            'band_name',
            'band_genre',
            'band_size',
            'band_instruments',
            'band_bio',
            'band_location',
            'years_active',
            "band_members",
            "followers",
            "follows",
        ]

    def create(self, validated_data):
        genre_data = validated_data.pop('band_genre')
        BandProfile = BandProfile.objects.create(**validated_data)
        for genre_data in genre_data:
            band_genre.objects.create(BandProfile=BandProfile, **genre_data)
        return BandProfile

    def create(self, validated_data):
        instrument_data = validated_data.pop('band_instruments')
        BandProfile = BandProfile.objects.create(**validated_data)
        for instrument_data in instrument_data:
            band_instruments.objects.create(BandProfile=BandProfile, **instrument_data)
        return BandProfile


class FollowSerializer(serializers.ModelSerializer):
    follows = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = UserProfile, BandProfile
        fields = [
            'follows'
        ]



