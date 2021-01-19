from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def other(request, p):
    return render(request, 'index.html')