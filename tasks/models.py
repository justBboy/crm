from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField()
    NOTSTARTED = 'ns'
    ONGOING = 'og'
    COMPLETED = 'cm'
    LATE = 'lt'
    TASK_STATUS = [
        (NOTSTARTED, 'not started'),
        (ONGOING, 'ongoing'),
        (LATE, 'late'),
        (COMPLETED, 'completed')
    ]
    status = models.CharField(max_length=2, choices=TASK_STATUS, default=NOTSTARTED)
    created_at = models.DateTimeField(auto_now_add=True)
