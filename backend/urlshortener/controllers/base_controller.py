class ControllerResult:
    def __init__(self, data, http_status) -> None:
        self.data = data
        self.http_status = http_status
