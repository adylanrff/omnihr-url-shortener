from datetime import datetime

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST

from urlshortener import helpers

from urlshortener.serializers.create_shortened_url import CreateShortenedURLRequestSerializer

from urlshortener.controllers.url_shortener_generator_controller import URLShortenerGeneratorController
from urlshortener.services.time_generator.default_time_generator import DefaultTimeGenerator
from urlshortener.services.url_hasher.sha_url_hasher import SHA256URLHasher


class CreateShortenURLView(APIView):

    def post(self, request, format=None):
        time_generator = DefaultTimeGenerator()
        ip_address = helpers.get_client_ip(request)
        timestamp = datetime.now()
        url_hasher = SHA256URLHasher(ip_address, timestamp)

        controller = URLShortenerGeneratorController(
            time_generator, url_hasher)

        serializer = CreateShortenedURLRequestSerializer(data=request.data)
        if serializer.is_valid():
            result = controller.process(**serializer.data)
            return Response(data=result.data, status=result.http_status)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
