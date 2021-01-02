from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes contact info to be sent to the frontend or saved to the database
    """
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone_number', 'alias']
        