from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes an event to be sent over the network or saved in the database
    """
    class Meta:
        model = Event
        fields = ['title', 'date']