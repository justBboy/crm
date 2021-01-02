from .serializers import ClientSerializer 
from rest_framework import permissions, viewsets

class ClientViewSet(viewsets.ModelViewSet):
    """
    api endpoint that allows access to create, update, read and delete a client in the database 
    """
    serializer_class = ClientSerializer 
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.client_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)