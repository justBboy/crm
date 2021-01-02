from .models import Note
from rest_framework import viewsets, permissions
from .serializers import NoteSerializer 


class NoteViewSet(viewsets.ModelViewSet):
    """
    api endpoint that allows access to create, update, read and delete a Note in the database 
    """
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.note_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

