from django.shortcuts import render

def home(request):
    return render(request, "task_man/index.html")
    

# Create your views here.
