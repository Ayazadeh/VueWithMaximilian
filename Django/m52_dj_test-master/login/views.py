from django.contrib.auth.models import User
from django.shortcuts import HttpResponse, render, redirect

# Create your views here.
from django.utils import timezone
from django.views import View
from django.views.decorators.csrf import csrf_exempt


def login(request):
    return HttpResponse("Login view")


def logout(request):
    # Logout user
    render(request, 'index.html')
    return HttpResponse("Logout view")


def register(request):
    if request.method == 'POST':
        redirect('login:register')
        try:
            user = User.objects.create(
                first_name=request.POST['first_name'],
                last_name=request.POST['last_name'],
                username=request.POST['username'],
                email=request.POST['email'],
                password=request.POST['password'],
            )
            return HttpResponse("Eyval!!!!")
        except:
            return HttpResponse("BAD Request", status=501)
    else:
        return render(request, 'register.html')


def forget_password(request):
    return HttpResponse("ForgetPass view")

