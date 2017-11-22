from rest_framework import generics

from .models import Response
from .serializers import ResponseSerializer

class ResponseList(generics.ListCreateAPIView):

    queryset = Response.objects.all()
    serializer_class = ResponseSerializer
    name = 'response-list'

class ResponseDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Response.objects.all()
    serializer_class = ResponseSerializer
    name = 'response-detail'

class ResponseVideoIdList(generics.ListAPIView):

    serializer_class = ResponseSerializer
    name = 'response-videoid-list'

    def get_queryset(self):

        video_id = self.kwargs['videoid']
        return Response.objects.filter(video_id=video_id)
