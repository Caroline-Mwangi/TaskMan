# Generated by Django 4.2.2 on 2023-08-10 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_man', '0004_userotp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userotp',
            name='otp_secret',
            field=models.CharField(max_length=128),
        ),
    ]
