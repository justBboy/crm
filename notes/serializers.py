from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes a note to be sent to the frontend or saved in the database 
    """
    class Meta:
        model = Note
        fields = ['title', 'note']