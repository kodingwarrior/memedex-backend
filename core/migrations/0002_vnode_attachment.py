# Generated by Django 4.2.7 on 2024-06-26 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vnode',
            name='attachment',
            field=models.FileField(default=None, null=True, upload_to='production'),
        ),
    ]
