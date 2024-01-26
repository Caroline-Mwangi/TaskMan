from django.db import models
from django.contrib.auth.hashers import make_password

class Task(models.Model):
    task = models.CharField(max_length=250, null=False, blank=False)
    task_date = models.DateField(auto_now=False, auto_now_add=False)
    task_time = models.TimeField(auto_now=False, auto_now_add=False)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.task