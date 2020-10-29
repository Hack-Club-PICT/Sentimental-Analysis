# Generated by Django 3.1.2 on 2020-10-29 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_tweet_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='owner',
            field=models.CharField(max_length=25000),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='text',
            field=models.CharField(max_length=25000),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='type',
            field=models.CharField(default='', max_length=25000),
        ),
    ]