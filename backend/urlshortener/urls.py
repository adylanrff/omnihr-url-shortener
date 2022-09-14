from django.urls import path
from urlshortener import views

urlpatterns = [
    path('shortened_url/', views.ShortenedURLAPIView.as_view()),
]
