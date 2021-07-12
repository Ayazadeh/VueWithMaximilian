from django.contrib import admin

# Register your models here.
from poll.models import Question, Choice

admin.site.register(Question)
admin.site.register(Choice)