from rest_framework import serializers
from core.models import User, UserProfile, BandProfile

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




class UserProfileSerializer(serializers.ModelSerializer):
    ind = serializers.SlugRelatedField(read_only=True, slug_field='username')
    followers = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = UserProfile
        fields = [
            'pk',
            'ind',
            'ind_bio',
            'ind_name', 
            'ind_instrument',
            'ind_zipcode',
            'ind_genre',
            'created_at'
            'followers'

        ]
  
    
class BandProfileSerializer(serializers.ModelSerializer):
    follows = serializers.StringRelatedField(many=True, read_only=True)
    followers = serializers.StringRelatedField(many=True, read_only=True)
    band = serializers.SlugRelatedField(read_only=True, slug_field='username')
    class Meta:
        model = BandProfile  
        fields = [
            'pk',
            'band',
            'band_name',
            'band_genre',
            'band_size',
            'band_instrument',
            'band_bio',
            'band_location',
            'years_active',
            "band_members",
            "followers",
            "follows",
        ]
    

class FollowSerializer(serializers.ModelSerializer):
    follows = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = UserProfile, BandProfile
        fields = [
            'follows'
        ]



