# Generated by Django 4.1.1 on 2022-09-15 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urlshortener', '0002_alter_shortenedurl_hash'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='shortenedurl',
            name='full_url_idx',
        ),
    ]
