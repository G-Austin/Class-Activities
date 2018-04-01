from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse, Http404

from .models import User

from django.views.generic.detail import DetailView, ListView

from snippets.models import Snippet

# def index(request):

#     context = { 'name' : 'Adonis', 'users' : User.objects.all() }

#     return render(request, 'users/index.html', context)

class UserListView(ListView):
    model = User
    template_name = 'users/index.html'

    def get_context_data(self, **kwargs):
        context = super(UserListView, self).get_context_data(**kwargs)
        context ['name'] = 'Adonis'

        return context

# def detail(request, user_id):
#     try:
#         context =  { 'user' : User.objects.get(id=user_id) }
#     except User.DoesNotExist:
#         raise Http404('User does not exist')

#     return render(request, 'users/detail.html', context)

class UserDetailView(ListView):
    model = User
    template_name = 'user/detail.html'

def add(request):

    context = { 'header' : 'This is the add view!'}

    return render(request, 'users/add.html', context)
