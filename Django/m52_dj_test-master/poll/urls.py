
from django.urls import path
from .views import *

app_name = 'poll'
urlpatterns = [
    path('', index, name='index'),
    path('<int:qid>/', detail, name='detail'),
]