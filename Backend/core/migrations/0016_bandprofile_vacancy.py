# Generated by Django 3.1.7 on 2021-02-24 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_auto_20210223_2332'),
    ]

    operations = [
        migrations.AddField(
            model_name='bandprofile',
            name='vacancy',
            field=models.BooleanField(default=True),
        ),
    ]