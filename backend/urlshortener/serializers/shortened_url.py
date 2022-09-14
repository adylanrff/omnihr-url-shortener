from rest_framework import serializers
from urlshortener.models.shortened_url import ShortenedURL


class ShortenedURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortenedURL
        fields = ['id', 'expiry_time', 'hash', 'full_url']
