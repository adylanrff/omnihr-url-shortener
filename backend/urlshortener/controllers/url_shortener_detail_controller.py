from datetime import datetime
from urlshortener.serializers.shortened_url import ShortenedURLSerializer
from urlshortener.controllers.base_controller import ControllerResult
from urlshortener.models import ShortenedURL
from rest_framework import status


class URLShortenerDetailController:
    def process(self, hash: str) -> ControllerResult:
        now = datetime.now()
        shortened_url_qs = list(ShortenedURL.objects.filter(
            hash=hash, expiry_time__gte=now))
        if len(shortened_url_qs) == 0:
            return ControllerResult({"error": "Not Found"}, status.HTTP_404_NOT_FOUND)
        else:
            shortened_url_model = shortened_url_qs[0]

        serialized_data = ShortenedURLSerializer(shortened_url_model)
        return ControllerResult(serialized_data.data, status.HTTP_200_OK)
