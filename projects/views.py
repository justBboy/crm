from .serializers import ProjectSerializer
from rest_framework import permissions, viewsets

class ProjectViewSet(viewsets.ModelViewSet):
    """
    api endpoint that allows access to create, update, read and delete a project in the database 
    """
    serializer_class = ProjectSerializer 
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.project_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)