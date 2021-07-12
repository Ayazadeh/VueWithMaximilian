from django.db import models


# Create your models here.

class BlogPost(models.Model):

    header = models.CharField(max_length=30, null=True, default='title...')
    create_timestamp = models.DateTimeField()



