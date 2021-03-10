# Generated by Django 3.1.7 on 2021-03-09 16:12

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0039_auto_20210308_2326'),
    ]

    operations = [
        migrations.AddField(
            model_name='messages',
            name='display_for_user',
            field=models.ManyToManyField(null=True, related_name='display', to=settings.AUTH_USER_MODEL),
        ),
    ]
