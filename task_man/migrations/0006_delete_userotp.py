# Generated by Django 4.2.2 on 2023-08-15 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task_man', '0005_alter_userotp_otp_secret'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserOTP',
        ),
    ]
