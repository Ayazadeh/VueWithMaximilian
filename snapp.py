class Location:
    lat: float
    lng: float
    detail: ...

    def __init__(self, lat, lng) -> None:
        self.lat = lat
        self.lng = lng

    @staticmethod
    def distance(loc1, loc2):
        return ((loc1.lat - loc2.lat)**2 + (loc1.lng - loc2.lng)**2) ** 0.5


class Vehicle:
    tag: str


class Car(Vehicle):
    tag: str
    model: str
    brand: str
    color: ...


class Motor(Vehicle):
    pass


class User:
    first_name: str
    last_name: str
    phone: str
    location: Location


class Passenger(User):
    pass


class Driver(User):
    car: Car


class Trip:

    COUNT = 0

    __MIN_PRICE = 8500

    trip_id: int
    driver: Driver
    passenger: Passenger
    origin: Location
    dist: Location
    trip_type: str
    price: float
    detail: ...

    status: str

    def __init__(self, driver: Driver, passenger: Passenger, origin: Location, dist: Location, type='Normal',**kwargs) -> None:
        self.driver = driver
        self.passenger = passenger
        self.origin = origin
        self.dist = dist
        self.trip_type = type
        self.detail = kwargs

        self.COUNT += 1

        self.price = self.__calculate_price()

    @classmethod
    def change_minimum_price(cls, new_price):
        cls.__MIN_PRICE = new_price

    def trip_distance(self):
        return Location.distance(self.origin, self.dist)

    def __calculate_price(self):
        return self.__MIN_PRICE + (self.trip_distance() * 1000)

    def start_trip(self):
        self.status = 'Started'

    def cancel(self):
        self.status = 'Canceled'
        self.COUNT -= 1



