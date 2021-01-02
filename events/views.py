from .models import Event
from rest_framework import viewsets, permissions
from .serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    """
    api endpoint that allows access to create, update, read and delete an event in the database 
    """
    serializer_class = EventSerializer 
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.event_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
