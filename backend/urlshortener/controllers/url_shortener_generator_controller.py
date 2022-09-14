from datetime import datetime, timedelta
from textwrap import shorten
from urlshortener.serializers.shortened_url import ShortenedURLSerializer
from urlshortener.controllers.base_controller import ControllerResult
from urlshortener.services.url_hasher.url_hasher import URLHasher
from urlshortener.services.time_generator.time_generator import TimeGenerator
from urlshortener.models import ShortenedURL
from rest_framework import status


DEFAULT_EXPIRY_DURATION_SECONDS = 15 * 60  # 15 minutes
SHORTENED_URL_LENGTH = 7


class URLShortenerGeneratorController:
    def __init__(self, time_generator: TimeGenerator, url_hasher: URLHasher) -> None:
        self.time_generator: TimeGenerator = time_generator
        self.url_hasher: URLHasher = url_hasher

    def process(self, full_url) -> ControllerResult:
        expiry_time = self.get_expiry_time()
        url_hash = self.url_hasher.hash(full_url)
        url_hash = url_hash[:SHORTENED_URL_LENGTH]

        # Try to get first, in case there is a subsequent request in a second
        shortened_url_qs = list(ShortenedURL.objects.filter(hash=url_hash))
        if len(shortened_url_qs) == 0:
            shortened_url_model = ShortenedURL.objects.create(
                full_url=full_url, hash=url_hash, expiry_time=expiry_time)
        else:
            shortened_url_model = shortened_url_qs[0]

        serialized_data = ShortenedURLSerializer(shortened_url_model)
        return ControllerResult(serialized_data.data, status.HTTP_201_CREATED)

    def get_expiry_time(self, expiry_duration=DEFAULT_EXPIRY_DURATION_SECONDS):
        return datetime.now() + timedelta(seconds=expiry_duration)
