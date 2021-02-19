from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import User, UserProfile, BandProfile
from core.serializers import UserSerializer, UserProfileSerializer, BandProfileSerializer, GenreSerializer, InstrumentSerializer, FollowSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response 

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [
       IsAuthenticated,
    ]
    lookup_field = 'username'

    def get_queryset(self):
        return User.objects.all()

    def perform_create(self, serializer):
        return serializer.save(self.request.user)
    
    @action(permission_classes=[IsAuthenticated], detail=False)
    def me(self, request, *args, **kwargs):
        User = get_user_model()
        self.object = get_object_or_404(User, pk=request.user.id)
        serializer = self.get_serializer(self.object)
        return Response(serializer.data)

class UserProfileViewSet(ModelViewSet):
    serializer_class = UserProfileSerializer
    permission_classes =[
        IsAuthenticated,
        ]
    
    def get_queryset(self):
        return UserProfile.objects.all()

    def perform_create(self, serializer):
        return serializer.save(self.request.user)

class BandProfileViewSet(ModelViewSet):
    serializer_class = BandProfileSerializer
    permission_classes = [
        IsAuthenticated,
        ]
    
    def get_queryset(self):
        return BandProfile.objects.all()

    def perform_create(self, serializer):
        return serializer.save(self.request.band)


class FollowViewSet(ModelViewSet):
    serializer_class = FollowSerializer



