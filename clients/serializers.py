from rest_framework.serializers import ModelSerializer
from .models import Client


class ClientSerializer(ModelSerializer):
    """
    serializers and deserializes clients data to be sent over the network or saved to the database 
    """
    class Meta:
        model = Client
        fields = ['name', 'work', 'phone_number', 'company']