from django.urls import path, include
from .api import RegisterApi, LoginApi, UserAPIView
from knox import views as knox_views

urlpatterns = [
    path('api/auth/login', LoginApi.as_view(), name="login"),
    path('api/auth/register', RegisterApi.as_view(), name="signup"),
    path('api/auth/user', UserAPIView.as_view(), name="user"),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="logout"),
    path('api/auth/logoutall', knox_views.LogoutAllView.as_view(), name="logoutall")
]