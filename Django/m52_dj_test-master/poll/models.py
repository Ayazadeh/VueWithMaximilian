from django.db import models


# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=250)
    pub_datetime = models.DateTimeField()

    def __str__(self):
        return f"{self.question_text}"


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=50)
    votes = models.IntegerField()

    def __str__(self):
        return f"{self.question.id}: {self.choice_text}"