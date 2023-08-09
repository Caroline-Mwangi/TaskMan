from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

def home(request):
    return render(request, "task_man/index.html")

def signup(request):
    if request.method == "POST":
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        email = request.POST['email']
        password = request.POST['pass']
        cpassword = request.POST['cpass']
        
        if User.objects.filter(email=email):
            messages.error(request, "This email is already registered!!")
            return redirect('signup')
        
        if password != cpassword:
            messages.error(request, "Passwords do not match! Please try again!")
            return redirect('signup')
        
        user = User(first_name=first_name, last_name=last_name, email=email, password=password)
        user.save()
        
        messages.success(request, f"Hello,{user.first_name} :) Registration Successful!! Check your email for verification before you login.")
        
    return render(request, "task_man/signup.html")

def verify(request):
    return render(request, "task_man/verify.html")

def login(request):
    return render(request, "task_man/login.html")