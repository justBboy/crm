from .models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """
    Api endpoint that allows contacts to be accessed, updated or deleted
    """
    
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.contact_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
