# Generated by Django 4.2.13 on 2024-07-14 08:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0002_vnode_attachment'),
    ]

    operations = [
        migrations.AddField(
            model_name='vnode',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='files', to=settings.AUTH_USER_MODEL, verbose_name='소유자'),
        ),
        migrations.AlterField(
            model_name='vnode',
            name='attachment',
            field=models.FileField(default=None, null=True, upload_to='production/'),
        ),
    ]
