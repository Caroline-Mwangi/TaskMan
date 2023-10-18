from django.shortcuts import render, redirect
from .models import User, Task
from django.contrib import messages
import pyotp
from django.core.mail import send_mail
from django.conf import global_settings
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth import logout
import datetime
from django.utils import timezone
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import taskModelSerializer

def home(request):
    return render(request, "task_man/index.html")

def signup(request):
    if request.method == "POST":
        global email
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        email = request.POST['email']
        password = request.POST['pass']
        cpassword = request.POST['cpass']
        
        if User.objects.filter(email=email):
            messages.error(request, "This email is already registered!!")
            return redirect('signup')
        elif password != cpassword:
            messages.error(request, "Passwords do not match! Please try again!")
            return redirect('signup')
        else:
            global user
            user = User(first_name=first_name, last_name=last_name, email=email, password=password)
            user.save()
            
            send_otp(request)
            
            messages.success(request, f"Hello,{user.first_name} :) Registration Successful!! Check your email for otp verification before you login.")
            return redirect('verify')
        
    return render(request, "task_man/signup.html")

def send_otp(request):
    is_resend = request.GET.get('resend') == '1'
            
    if not is_resend:  
        totp = pyotp.TOTP(pyotp.random_base32())
        otp_token = totp.now()
                
        otp_expiration = timezone.now() + datetime.timedelta(minutes=5)
                
        request.session['otp_token'] = otp_token
        request.session['otp_expiration'] = int(otp_expiration.timestamp())
    else:
        totp = pyotp.TOTP(pyotp.random_base32())
        otp_token = totp.now()
        request.session['otp_token'] = otp_token    
            
    # Send email
    subject = 'WELCOME TO TASKMAN'
    message = f'Hello {user.first_name},\n\nThank you for creating a taskman account.\n\nYour OTP code is: {otp_token}.\n\nUse this code to activate your account.\n\nThe code will expire after 10 minutes.\n\nKind regards,\n\nTaskMan Team.'
    from_email = global_settings.EMAIL_HOST_USER
    recipient_list = [user.email]
            
    send_mail(subject, message, from_email, recipient_list)
    return redirect('verify')

def verify(request):
    if request.method == "POST":
        otp_input = request.POST['otp-verify']
        
        stored_otp = request.session.get('otp_token')
        otp_expiration2 = request.session.get('otp_expiration')
        
        if otp_expiration2:
            if timezone.now().timestamp() > otp_expiration2:
                messages.error(request, "OTP has expired. Please request a new OTP.")
                return render(request, "task_man/verify.html")
        
        
        if otp_input == stored_otp:
            User.objects.filter(email=email).update(is_active=True)
            messages.success(request, "Your account has been activated successfully! You can now log into your account :)")
            del request.session['otp_token']
            del request.session['otp_expiration']
            return redirect('login')
        else:
            messages.error(request, "OOPS! Invalid OTP.")   
            return redirect('verify')     
    return render(request, "task_man/verify.html")

def login(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['pass']
        
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, "User does not exist! Sign Up to Taskman to log in!")
            return redirect('login')
        
        if user.is_active == True:
            if check_password(password, user.password):
                request.session['first_name'] = user.first_name
                request.session['id'] = user.id
                return redirect('landing')
            else:
                messages.error(request, "Wrong Password!! Please try again!!")
                return redirect('login')
        else:
            messages.error(request, "Oops! Your user account is not active.")
        
    return render(request, "task_man/login.html")

def update(request):
    if request.method == "POST":
        email = request.POST['email']
        new_password = request.POST['pass']
        cpassword = request.POST['cpass']
        
        if not User.objects.filter(email=email):
            messages.error(request, "User does not exist. Please enter a valid email!")
            return redirect('update')
        elif new_password != cpassword:
            messages.error(request, "Passwords do not match! Please try again!")
            return redirect('update')
        else:
            User.objects.filter(email=email).update(password=make_password(new_password))
            messages.success(request, "Your password has been changed successfully!")
            return redirect('login')
        
    return render(request, "task_man/update.html")

def landing(request):
    return render(request, "task_man/landing.html")

def log_out(request):
    logout(request)
    messages.success(request, "Logged out successfully!!")
    return redirect('login')

class taskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = taskModelSerializer
    
    def list(self, request, *args, **kwargs):
        completed_param = request.GET.get('completed')

        if completed_param is not None:
            completed = completed_param.lower() == 'true'
            tasks = Task.objects.filter(completed=completed)
        else:
            tasks = Task.objects.all()
            
        serializer = self.get_serializer(tasks, many=True)
        return Response(serializer.data)