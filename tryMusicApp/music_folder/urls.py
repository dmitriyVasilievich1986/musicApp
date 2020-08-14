from rest_framework import routers
from .viewset import MusicViewSet

router = routers.DefaultRouter()
router.register("api/music", MusicViewSet)
urlpatterns = router.urls
