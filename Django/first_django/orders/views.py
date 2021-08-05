from django.shortcuts import render, HttpResponse

from orders.models import Orders


def order(request):
    o = Orders.objects.all()
    return render(request, 'orders.html', {'o': o})
