from rest_framework import serializers
from .models import Response

class ResponseSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Response
        fields = (
            'url',
            'pk',
            'video_id',
            'pointed_time',
            'created',
        )
