from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('signup', views.signup, name="signup"),
    path('verify', views.verify, name="verify"),
    path('login', views.login, name="login"),
    path('landing', views.landing, name="landing"),
    path('logout', views.log_out, name="logout"),
]