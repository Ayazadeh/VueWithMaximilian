class NormalizerError(Exception):
    pass


class EmailError(NormalizerError):
    pass


class UserException(Exception):
    def __init__(self, msg, filed, data, *args):
        self.msg = f"in {filed=} your {data=} is {msg}"
        self.data = data
        self.filed = filed
        super().__init__(self.msg)
