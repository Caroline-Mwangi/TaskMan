# Generated by Django 4.2.2 on 2023-10-04 08:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('task_man', '0007_task'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='user_id',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='task_man.user'),
            preserve_default=False,
        ),
    ]
