import random
import numpy as np

from rest_framework import generics
from django.http import HttpResponse

from .models import Response, ResponseHighlight
from .serializers import ResponseSerializer, ResponseHighlightSerializer

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


class ResponseHighlightList(generics.ListCreateAPIView):

    queryset = ResponseHighlight.objects.all()
    serializer_class = ResponseHighlightSerializer
    name = 'responsehighlight-list'

class ResponseHighlightDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Response.objects.all()
    serializer_class = ResponseHighlightSerializer
    name = 'responsehighlight-detail'

class ResponseHighlightVideoIdList(generics.ListAPIView):

    serializer_class = ResponseHighlightSerializer
    name = 'responsehighlight-videoid-list'

    def get_queryset(self):

        video_id = self.kwargs['videoid']
        return ResponseHighlight.objects.filter(video_id=video_id)

def ResponseHighlightTestDataList(request):

    sample1 = [random.randint(30, 300) + random.random() for _ in range(500)]
    sample2 = [random.randint(400, 600) + random.random() for _ in range(500)]
    sample3 = [random.randint(800, 1000) + random.random() for _ in range(500)]
    sample4 = [random.randint(1200, 1300) + random.random() for _ in range(500)]
    sample5 = [random.randint(1500, 1600) + random.random() for _ in range(500)]
    sample6 = [random.randint(0, 1600) + random.random() for _ in range(3000)]

    y_data = sample1 + sample2 + sample3 + sample4 + sample5

    hist, bin_edges = np.histogram(y_data)

    average = sum(hist) / len(hist)
    resp = []
    for item, value in zip(hist, bin_edges):
        if item >= average:
            resp.append(value)

    result = " ".join(str(txt) for txt in resp)

    return HttpResponse(result)
