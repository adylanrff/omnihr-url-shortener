from django.db import models

SHORTENED_URL_LENGTH = 7


class ShortenedURL(models.Model):
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    expiry_time = models.DateTimeField()
    hash = models.CharField(max_length=SHORTENED_URL_LENGTH, unique=True)
    full_url = models.CharField(max_length=255)

    class Meta:
        indexes = [
            models.Index(fields=['hash'], name='hash_idx'),
        ]
