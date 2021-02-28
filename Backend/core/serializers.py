from rest_framework import serializers
from core.models import User, UserProfile, Instrument, Genre, WantedInstruments, UserFollowing, Messages

class UserSerializer(serializers.ModelSerializer):
    following = serializers.SerializerMethodField()
    followers = serializers.SerializerMethodField()
    
    class Meta: 
        model = User
        fields = [
            'pk', 
            'username',
            "name", 
            'first_name',
            'last_name',
            'email',
            'username',
            'password',
            "following",
            'followers'
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

    
    def get_following(self, obj):
        return FollowingSerializer(obj.following.all(), many=True).data

    def get_followers(self, obj):
        return FollowersSerializer(obj.followers.all(), many=True).data

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
            'vacancy', 
            "band_members",
            "individualorband",
            "wanted_instruments",
            "wanted_info"
        ]
class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.SlugRelatedField(slug_field="username",queryset=User.objects.all() )
    receiver = serializers.SlugRelatedField(slug_field="username", queryset=User.objects.all())
    class Meta:
        model = Messages
        fields = [
            "id",
            "sender",
            "receiver", 
            "image",
            "subject",
            "content",
            'read',
            "created_at"
        ]

class FollowingSerializer(serializers.ModelSerializer):
    following_user = serializers.SlugRelatedField(slug_field="username", queryset=User.objects.all())
    class Meta:
        model = UserFollowing
        fields = ('id', "following_user", "created")
class FollowersSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username", queryset=User.objects.all())
    class Meta:
        model = UserFollowing
        fields = ( 'id', "user", "created")

class UserFollowingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    following_user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all()) 
    following_user = serializers.SlugRelatedField(slug_field="username",queryset=User.objects.all())
    class Meta:
         model = UserFollowing
         fields = ("user", "following_user")



