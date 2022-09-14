from abc import ABC, abstractmethod
from datetime import datetime


class TimeGenerator(ABC):
    @abstractmethod
    def get_time_now(self) -> datetime:
        pass

    @abstractmethod
    def get_time_from_now(self, seconds: int = 0) -> datetime:
        pass
