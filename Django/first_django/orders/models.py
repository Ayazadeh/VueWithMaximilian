# Create your models here.
from django.db import models

from menu_items.models import MenuItems
from receipts.models import Receipt
from table.models import Table


class OrderStatus(models.Model):
    status = models.CharField(max_length=250)

    def __str__(self):
        return f"{self.status}"


class Orders(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    menu_items = models.ForeignKey(MenuItems, on_delete=models.CASCADE)
    number = models.PositiveIntegerField(default=1)
    receipt = models.ForeignKey(Receipt, on_delete=models.CASCADE)
    status = models.ForeignKey(OrderStatus, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    deleted = models.BooleanField()

    def __str__(self):
        return f'{self.table} {self.menu_items}' \
               f'{self.number}{self.receipt}' \
               f'{self.status}{self.created_at}' \
               f'{self.updated_at} {self.deleted}'