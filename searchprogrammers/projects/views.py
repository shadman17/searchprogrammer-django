from django.shortcuts import render
from django.http import HttpResponse

projectsList = [
    {
        'id': '1',
        'title' : 'Ecommerce Website',
        'description' : 'Fully Functional Ecommerce Website'
    },
    {
        'id': '2',
        'title' : 'Portfolio Website',
        'description' : 'This was a project where I built out my Portfolio'
    },
    {
        'id': '3',
        'title' : 'Social Network',
        'description' : 'Project I am working on'
    },
]


# Create your views here.
def projects(request):
    msg = "hello, I am from views in projects"
    number = 10
    context = {'msg': msg, 'number': number, 'projectsList':projectsList}
    return render(request, "projects/projects.html", context)


def project(request,pk):
    projectObj = None
    for project in projectsList:
        if project['id'] == pk:
            projectObj = project

    return render(request, "projects/single-project.html", {'project': projectObj})