from django.db import models


class Response(models.Model):

    video_id = models.CharField(max_length=200)
    pointed_time = models.FloatField()#DecimalField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created',)
