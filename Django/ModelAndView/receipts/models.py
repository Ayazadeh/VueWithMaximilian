from django.db import models


class Receipt(models.Model):
    order = models.IntegerField()
    total_price = models.FloatField()
    total_discount = models.FloatField()
    final_price = models.FloatField()
    creat_at = models.DateTimeField()
    update_at = models.DateTimeField()
    deleted = models.BooleanField()

    def __str__(self):
        return f'{self.order}{self.total_price}' \
               f'{self.total_discount}{self.final_price}' \
               f'{self.creat_at}{self.update_at}{self.deleted}'