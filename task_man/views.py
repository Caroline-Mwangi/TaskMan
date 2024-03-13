from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    def get_queryset(self):
        completed = self.request.query_params.get('completed', None)
        queryset = Task.objects.all()

        if completed:
            queryset = queryset.filter(completed = completed)
            
        return queryset