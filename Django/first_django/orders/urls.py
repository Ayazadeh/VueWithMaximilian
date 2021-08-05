from django.urls import path

from .views import *

urlpatterns = [
    path('orders/', order, name='order'),
]