from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

class Lead(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    title = models.CharField(max_length=256)
    company = models.CharField(max_length=128, blank=True, null=True)
    phone_number = PhoneNumberField()
    email = models.EmailField(max_length=256)
    created_at = models.DateTimeField(auto_now=True)