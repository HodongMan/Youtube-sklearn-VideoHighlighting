from django.conf.urls import url
from .views import ResponseList, ResponseDetail, ResponseVideoIdList
from .views import ResponseHighlightList, ResponseHighlightDetail,ResponseHighlightVideoIdList
from .views import ResponseHighlightTestDataList

urlpatterns = [
    url(r'^$', ResponseList.as_view(), name=ResponseList.name),
    url(r'^video/(?P<videoid>.+)/$', ResponseVideoIdList.as_view(), name=ResponseVideoIdList.name),
    url(r'^(?P<pk>[0-9]+)/$', ResponseDetail.as_view(), name=ResponseDetail.name),
    url(r'^highlight/$', ResponseHighlightList.as_view(), name=ResponseHighlightList.name),
    url(r'^highlight/video/(?P<videoid>.+)/$', ResponseHighlightVideoIdList.as_view(), name=ResponseHighlightVideoIdList.name),
    url(r'^highlight(?P<pk>[0-9]+)/$', ResponseHighlightDetail.as_view(), name=ResponseHighlightDetail.name),
    url(r'^highlight/test/$', ResponseHighlightTestDataList, name='response-test-list'),

]
