from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def projects(request):
    return HttpResponse("All of the projects")


def project(request,pk):
    return HttpResponse(f'project {pk}')