from rest_framework import serializers
from .models import Lead


class LeadSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes a lead to be sent to the frontend or saved in the database 
    """
    class Meta:
        model = Lead
        fields = ['name', 'title', 'company', 'phone_number', 'email']