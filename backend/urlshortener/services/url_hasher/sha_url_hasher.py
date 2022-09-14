import base64
from datetime import datetime
from hashlib import sha256
from time import time
from urlshortener.services.url_hasher.url_hasher import URLHasher


class SHA256URLHasher(URLHasher):

    def __init__(self, ip_address: str, timestamp: datetime) -> None:
        super().__init__()
        self.ip_address: str = ip_address
        self.timestamp: str = timestamp.strftime("%s")

    def hash(self, full_url: str) -> str:
        payload = self.ip_address+self.timestamp+full_url
        hashed_payload = sha256(payload.encode())
        return base64.b64encode(hashed_payload.hexdigest().encode()).decode("utf-8")
