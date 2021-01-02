from django.db import models
from django.contrib.auth.models import User
from clients.models import Client

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    client = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    NOT_STARTED = 'ns'
    ON_GOING = 'og'
    COMPLETED = 'cm'
    LATE = 'lt'
    PROJECT_STATUS = [
        (NOT_STARTED, 'not started'),
        (ON_GOING, 'on going'),
        (COMPLETED, 'completed'),
        (LATE, 'late')
    ]
    status = models.CharField(max_length=2, choices=PROJECT_STATUS, default=NOT_STARTED)
    created_at = models.DateTimeField(auto_now_add=True)