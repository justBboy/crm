from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Profile

from .utils import generate_random_ints

#User serializer

class ProfileSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes the profile model to be sent over the network or saved in the database 
    """
    class Meta:
        model = Profile
        fields = ('profile_pic',)

class UserSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes the user model to be sent over the network or saved in the database
    """
    profile = ProfileSerializer()
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'profile')

class RegisterSerializer(serializers.ModelSerializer):
    """
    deserializes the registration form that is sent from the client to be saved 
    """
    profile_pic = serializers.ImageField(required=False)
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile_pic')
        extra_kwargs = {'password': {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        if validated_data['profile_pic']:
            user.profile.profile_pic = validated_data['profile_pic']
            user.profile.save()
        return user
