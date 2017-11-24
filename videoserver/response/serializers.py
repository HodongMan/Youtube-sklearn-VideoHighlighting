from rest_framework import serializers
from .models import Response, ResponseHighlight

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


class ResponseHighlightSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = ResponseHighlight
        fields = (
            'url',
            'pk',
            'video_id',
            'start_time',
            'end_time',
            'update_time',
            'created',
        )
