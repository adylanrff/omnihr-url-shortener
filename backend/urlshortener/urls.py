from django.urls import path
from urlshortener import views

urlpatterns = [
    path('shorten/', views.CreateShortenURLView.as_view()),
]
