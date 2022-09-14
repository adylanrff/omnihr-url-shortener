
from datetime import datetime, timedelta
from urlshortener.services.time_generator.time_generator import TimeGenerator


class DefaultTimeGenerator(TimeGenerator):
    def __init__(self) -> None:
        super().__init__()

    def get_time_now(self) -> datetime:
        return datetime.now()

    def get_time_from_now(self, seconds: int = 0) -> datetime:
        return self.get_time_now() + timedelta(seconds=seconds)
