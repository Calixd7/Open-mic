# Generated by Django 3.1.7 on 2021-03-08 17:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0036_auto_20210308_1713'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.userprofile'),
        ),
    ]
