py_range = range
class range:
    def __init__(self, start: int, end: int = None, step: int = 1):
        self.start = start
        self.end = end
        self.step = step

    def __iter__(self):
        if self.end == None:
            self.start, self.end = -1, self.start
        return self

    def __next__(self):
        self.start += self.step
        if self.start < self.end:
            return self.start


def tester(start, end=None, step=-1):
    if end:
        return list(range(start,end, step)) == list(py_range(start, end, step))
    else:
        return list(range(start)) == list(py_range(start))


# print(tester(10))
# print(tester(10, 1))
# print(tester(10, 20))
# print(tester(10, 1, -1))
# print(tester(10, 1, -2))
# print(tester(10, 20, 2))