from django.db import models


# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=285)
    discribe = models.CharField(max_length=285)
    parent = models.IntegerField()
    create_at = models.DateTimeField()
    update_at = models.DateTimeField()
    deleted = models.BooleanField()

    def __str__(self):
        return f'{self.name}{self.discribe}' \
               f'{self.parent}{self.create_at}' \
               f'{self.update_at}{self.deleted}'


class Price(models.Model):
    start_date = models.DateTimeField()
    amount = models.FloatField()
    price = models.FloatField()

    def __str__(self):
        return f'{self.start_date}{self.amount}{self.price}'


class Discount(models.Model):
    name = models.CharField(max_length=285)
    code = models.CharField(max_length=285)
    amount = models.FloatField(max_length=285)
    create_at = models.DateTimeField()
    update_at = models.DateTimeField()
    deleted = models.BooleanField()

    def __str__(self):
        return f"{self.name} {self.code}" \
               f"{self.amount} {self.create_at}" \
               f"{self.update_at} {self.deleted}"


class MenuItems(models.Model):
    name = models.CharField(max_length=285)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
    discount = models.ForeignKey(Discount, on_delete=models.CASCADE)
    starting_cooking_time = models.TimeField()
    stimated_cooking_time = models.TimeField()
    create_at = models.DateTimeField()
    update_at = models.DateTimeField()
    deleted = models.BooleanField()

    def __str__(self):
        return f'{self.name} {self.category}' \
               f'{self.price} {self.discount}' \
               f'{self.starting_cooking_time} {self.stimated_cooking_time}' \
               f'{self.create_at} {self.update_at} {self.deleted}'
