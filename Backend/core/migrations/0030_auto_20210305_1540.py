# Generated by Django 3.1.7 on 2021-03-05 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0029_auto_20210304_2234'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='messages',
            name='name',
        ),
        migrations.AddField(
            model_name='messages',
            name='sender_name',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]
