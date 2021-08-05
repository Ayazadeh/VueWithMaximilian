from django.urls import path, include
from .views import *

app_name = 'menu_items'
urlpatterns = [
    path('', detail, name='detail')
]