# Generated by Django 3.1.7 on 2021-03-04 00:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0022_auto_20210304_0011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='sender_name',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
