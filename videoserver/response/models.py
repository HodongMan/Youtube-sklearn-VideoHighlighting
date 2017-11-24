from datetime import datetime
from django.db import models


class Response(models.Model):

    video_id = models.CharField(db_index=True, max_length=200)
    pointed_time = models.FloatField()#DecimalField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('video_id', 'pointed_time',)


class ResponseHighlight(models.Model):

    video_id = models.CharField(db_index=True, max_length=200)
    start_time = models.FloatField()
    end_time = models.FloatField()
    update_time = models.DateTimeField(default=datetime.now())
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('video_id', 'start_time',)
