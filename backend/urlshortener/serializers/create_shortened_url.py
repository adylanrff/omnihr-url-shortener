from rest_framework import serializers


class CreateShortenedURLRequestSerializer(serializers.Serializer):
    full_url = serializers.URLField(required=True)
