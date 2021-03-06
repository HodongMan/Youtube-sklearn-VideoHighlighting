# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-11-24 00:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('response', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResponseHighlight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_id', models.CharField(max_length=200)),
                ('start_time', models.FloatField()),
                ('end_time', models.FloatField()),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('video_id', 'start_time'),
            },
        ),
        migrations.AlterModelOptions(
            name='response',
            options={'ordering': ('video_id', '-created')},
        ),
    ]
