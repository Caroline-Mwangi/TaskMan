from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', views.taskViewSet)

urlpatterns = [
    path('', views.home, name="home"),
    path('signup', views.signup, name="signup"),
    path('verify', views.verify, name="verify"),
    path('send_otp', views.send_otp, name="send_otp"),
    path('login', views.login, name="login"),
    path('update', views.update, name="update"),
    path('landing', views.landing, name="landing"),
    path('logout', views.log_out, name="logout"),
    path('api/', include(router.urls)),
]