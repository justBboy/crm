from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
