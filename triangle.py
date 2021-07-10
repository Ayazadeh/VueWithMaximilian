class Triangle:
    def __init__(self, x, y, x1, y1, x2, y2):
        self.x = x
        self.y = y
        self.x1 = x1
        self.y1 = y1
        self.x2 = x2
        self.y2 = y2

    def area(self):
        s = 0.5 * abs((self.x * (self.y1 - self.y2) + self.x1 * (self.y2 - self.y) + self.x2 * (self.y - self.y1)))
        return s


triangle = Triangle(0, 0, 3, 0, 2, 2)
print(triangle.area())
