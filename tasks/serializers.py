from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    """
    serializes and deserializes a task to be sent to the frontend or saved in the database 
    """
    class Meta:
        model = Task
        fields = ['title', 'start_date', 'end_date', 'status']