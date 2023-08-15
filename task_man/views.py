from django.shortcuts import render, redirect
from .models import User, UserOTP
from django.contrib import messages
import pyotp
from datetime import datetime, timedelta
from django.core.mail import send_mail
from django.conf import global_settings

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
            
            totp = pyotp.TOTP(pyotp.random_base32())
            otp_token = totp.now()
            
            request.session['otp_token'] = otp_token
            
            # Send email
            subject = 'WELCOME TO TASKMAN'
            message = f'Hello {user.first_name},\n\nThank you for creating a taskman account.\n\nYour OTP code is: {otp_token}.\n\nUse this code to activate your account.\n\nThe code will expire after 10 minutes.\n\nKind regards,\n\nTaskMan Team.'
            from_email = global_settings.EMAIL_HOST_USER
            recipient_list = [user.email]
            
            send_mail(subject, message, from_email, recipient_list)
            
            messages.success(request, f"Hello,{user.first_name} :) Registration Successful!! Check your email for otp verification before you login.")
            return redirect('verify')
        
    return render(request, "task_man/signup.html")

def verify(request):
    if request.method == "POST":
        otp_input = request.POST['otp-verify']
        
        stored_otp = request.session.get('otp_token')
        
        
        if otp_input == stored_otp:
            User.objects.filter(email=email).update(is_active=True)
            messages.success(request, "Your account has been activated successfully! You can now log into your account :)")
            return redirect('login')
        else:
            messages.error(request, "OOPS! Something went wrong.")   
            return redirect('verify')     
    return render(request, "task_man/verify.html")

def login(request):
    return render(request, "task_man/login.html")