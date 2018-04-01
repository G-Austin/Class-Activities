from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^index/$', views.UserListView.as_view(), name='index'),

    url(r'^detail/(?P<user_id>[0-9]+)/$', UserDetailView.as_view(), name='detail'),
    url(r'^add/$', views.add, name='add'),
]
