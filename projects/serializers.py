from rest_framework.serializers import ModelSerializer
from .models import Project
from clients.serializers import ClientSerializer

class ProjectSerializer(ModelSerializer):
    """
    serializes and deserializes projects to be sent over the network or saved in the database 
    """
    client = ClientSerializer()
    class Meta:
        model = Project
        fields = ['title', 'client', 'start_date', 'end_date', 'status']
