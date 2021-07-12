from django.urls import path
from .views import *

app_name = 'login'
urlpatterns = [
    # path('<str:some_data>', LoginView.as_view(), name='index'),
    path('logout/', logout, name='logout'),
    path('register/', register, name='register'),
    path('forget_password/', forget_password),
]