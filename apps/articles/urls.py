from django.urls import path
from . import views

urlpatterns = [
    path('', views.ArticlesPageView.as_view(), name='articles'),
]

