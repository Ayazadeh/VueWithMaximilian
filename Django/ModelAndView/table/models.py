from django.db import models


class Status(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.name}"


class Table(models.Model):
    table_number = models.IntegerField()
    status = models.ForeignKey(Status, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.table_number}  {self.status}'