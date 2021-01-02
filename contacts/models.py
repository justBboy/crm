from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField


class Contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    phone_number = PhoneNumberField()
    email = models.EmailField(max_length=254)
    alias = models.CharField(max_length=256, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)