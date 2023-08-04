from django.shortcuts import render
from .models import User

def home(request):
    return render(request, "task_man/index.html")

def signup(request):
    if request.method == "POST":
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        email = request.POST['email']
        password = request.POST['pass']
        cpassword = request.POST['cpass']
        
        user = User(first_name=first_name, last_name=last_name, email=email, password=password)
        user.save()
        
    return render(request, "task_man/signup.html")

def verify(request):
    return render(request, "task_man/verify.html")

def login(request):
    return render(request, "task_man/login.html")