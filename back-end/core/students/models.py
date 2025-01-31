
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    birth_date = models.DateField()
    father_name = models.CharField(max_length=100)
    mother_name = models.CharField(max_length=100)
    grade = models.IntegerField()
    section = models.CharField(max_length=1)
    admission_date = models.DateField()

    def __str__(self):
        return self.name


