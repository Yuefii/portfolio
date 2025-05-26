from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProjectsPageView.as_view(), name='projects'),
]
