# Generated by Django 3.1.4 on 2020-12-30 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_contact_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='alias',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
