from django.conf.urls import url
from .views import ResponseList, ResponseDetail, ResponseVideoIdList

urlpatterns = [
    url(r'^$', ResponseList.as_view(), name=ResponseList.name),
    url(r'^videoid/(?P<videoid>.+)', ResponseVideoIdList.as_view(), name=ResponseVideoIdList.name),
    url(r'^(?P<pk>[0-9]+)/$', ResponseDetail.as_view(), name=ResponseDetail.name),

]
