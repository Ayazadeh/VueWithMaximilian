from django.shortcuts import render
from .models import MenuItems


def detail(request):
    menu_item = MenuItems.objects.all()
    return render(request, 'detail.html', {'menu_item': menu_item})
