from .models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    api endpoint that allows access to create, update, read and delete a task in the database 
    """
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.task_set.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


