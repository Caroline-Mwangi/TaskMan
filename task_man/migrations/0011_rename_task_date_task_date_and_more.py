# Generated by Django 5.0.1 on 2024-01-27 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task_man', '0010_remove_task_user_delete_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='task_date',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='task_time',
            new_name='time',
        ),
    ]
