from django.shortcuts import render

def home(request):
    return render(request, "task_man/index.html")

def signup(request):
    return render(request, "task_man/signup.html")

def verify(request):
    return render(request, "task_man/verify.html")