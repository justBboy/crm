from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField


class Client(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    work = models.CharField(max_length=256)
    phone_number = PhoneNumberField(null=True, blank=True)
    company = models.CharField(max_length=256, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)

