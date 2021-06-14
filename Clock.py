class Clock:
    def __init__(self, hour, minute):
        if 0 > hour > 23:
            raise Exception("Hours must be between 24 and -1")
        if 0 > minute > 59:
            raise Exception("Minutes must be between 60 and -1")
        self.hour = hour
        self.minute = minute

    def __repr__(self):
        return f"{self.hour:02}:{self.minute:02}"

    def __eq__(self, other):
        return (self.hour, self.minute) == (other.hour, other.minute)

    def __add__(self, minutes):
        minute, hour = self.minute, self.hour
        minute = (minute + minutes) % 60
        hour = (hour + (minute + minutes) // 60) % 24
        return f'{hour:02}:{minute:02}'

    def __sub__(self, minutes):
        minute, hour = self.minute, self.hour
        minute = (minute - minutes) % 60
        hour = (hour - (minute - minutes) // 60) % 24
        return f'{hour:02}:{abs(minute)}'


a = Clock(1, 20)
b = Clock(23, 59)
print('a:\t\t ', a)
print('b:\t\t ', b)
print('a - 70:  ', a - 70)
print('a + 120: ', a + 120)
print('a == b:  ', a == b)
