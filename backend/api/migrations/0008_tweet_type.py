# Generated by Django 3.1.2 on 2020-10-28 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20201028_2302'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='type',
            field=models.CharField(default='', max_length=1000),
        ),
    ]
