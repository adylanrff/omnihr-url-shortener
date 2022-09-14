from abc import ABC, abstractmethod


class URLHasher(ABC):
    @abstractmethod
    def hash(self, full_url: str) -> str:
        pass
