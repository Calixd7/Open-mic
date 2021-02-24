from rest_framework import serializers
from core.models import User, UserProfile, BandProfile, Instrument, Genre

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
    ind = serializers.SlugRelatedField(read_only=True, slug_field='username')
    ind_genres = serializers.SlugRelatedField(many=True,queryset=Genre.objects.all() ,slug_field='name')
    ind_instruments = serializers.SlugRelatedField(many=True,queryset= Instrument.objects.all() ,slug_field='name')
    # followers = serializers.StringRelatedField(many=True, read_only=True)
     # instrument = IndInstrumentSerializer(many=True)
    # genre = IndGenreSerializer(many=True)
    class Meta:
        model = UserProfile
        fields = [
            'pk',
            'ind',
            'ind_bio',
            'ind_name', 
            'ind_instruments',
            'ind_zipcode',
            'ind_genres',
            'created_at',
            'follows'

        ]

        # def create(self, validated_data):

 # class GenreSerializer (serializers.ModelSerializer):
#     class Meta:
#         model = BandProfile
#         fields = ["id", 'band_genre']

# class InstrumentSerializer (serializers.ModelSerializer):
#     class Meta:
#         model = BandProfile
#         fields = ["id", 'band_instruments']
 

    
class BandProfileSerializer(serializers.ModelSerializer):
    follows = serializers.StringRelatedField(many=True, read_only=True)
    followers = serializers.StringRelatedField(many=True, read_only=True)
    band = serializers.SlugRelatedField(read_only=True, slug_field='username')
    band_genres= serializers.SlugRelatedField(many=True,queryset=Genre.objects.all(),slug_field="name")
    band_instruments = serializers.SlugRelatedField(many=True,queryset=Instrument.objects.all() ,slug_field="name")
    # band_genre = GenreSerializer(many=True)
    # band_instruments =InstrumentSerializer(many=True)
    class Meta:
        model = BandProfile  
        fields = [
            'pk',
            'band',
            'band_name',
            'band_genres',
            'band_size',
            'band_instruments',
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



