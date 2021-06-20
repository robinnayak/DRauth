from django.db import models

# Create your models here.
class Todolist(models.Model):
    list = models.CharField(max_length=200)

    def __str__(self):
        return self.list

