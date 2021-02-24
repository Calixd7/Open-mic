from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import User, UserProfile
from core.serializers import UserSerializer, UserProfileSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response 
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

class IsOwnerOrReadOnly(permissions.BasePermission):
     
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user.is_authenticated:
            return True

        return False

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
                return True

        return obj.user == request.user



class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [
       IsAuthenticated
    ]
   
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
        permissions.IsAuthenticated, IsOwnerOrReadOnly
        ]
    
    def get_queryset(self):
        return UserProfile.objects.all()

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    # @action(detail=True, methods=['PUT'])
    # def image(self, request, pk, format=None):
    #     if 'file' not in request.data:
    #         raise ParseError('Empty content')

    #     file = request.data['file']
    #     post = self.get_object()

    #     post.image.save(file.name, file, save=True)
    #     return Response(status=201) 



# class FollowViewSet(ModelViewSet):
#     serializer_class = FollowSerializer
