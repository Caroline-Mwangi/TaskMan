from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=250, null=False, blank=False)
    date = models.DateField(auto_now=False, auto_now_add=False)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.task