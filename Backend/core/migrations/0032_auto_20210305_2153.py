# Generated by Django 3.1.7 on 2021-03-05 21:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0031_messages_display_for_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='messages',
            name='sender_name',
        ),
        migrations.AddField(
            model_name='messages',
            name='name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.userprofile'),
        ),
    ]
