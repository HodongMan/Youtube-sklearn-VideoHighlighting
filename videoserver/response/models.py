from django.db import models


class Response(models.Model):

    video_id = models.CharField(max_length=200)
    pointed_time = models.FloatField()#DecimalField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('video_id', '-created',)


class ResponseHighlight(models.Model):

    video_id = models.CharField(max_length=200)
    start_time = models.FloatField()
    end_time = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('video_id', 'start_time',)
