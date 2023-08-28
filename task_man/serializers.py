from rest_framework import serializers
from .models import Task

class taskModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'