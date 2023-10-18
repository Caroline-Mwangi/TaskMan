from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=False)
    
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return self.first_name

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.CharField(max_length=250)
    task_date = models.DateField(auto_now=False, auto_now_add=False)
    task_time = models.TimeField(auto_now=False, auto_now_add=False)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.task